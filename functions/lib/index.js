"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPartnerStatus = exports.registerPartner = exports.submitLead = void 0;
const https_1 = require("firebase-functions/v2/https");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
const asText = (v, max) => typeof v === 'string' ? v.trim().slice(0, max) : '';
exports.submitLead = (0, https_1.onCall)({ region: 'southamerica-east1', enforceAppCheck: true, maxInstances: 5 }, async (request) => {
    const data = request.data;
    if (!data || typeof data !== 'object')
        throw new https_1.HttpsError('invalid-argument', 'Dados inválidos.');
    const name = asText(data['name'], 120), phone = asText(data['phone'], 25).replace(/[^\d+]/g, ''), email = asText(data['email'], 180).toLowerCase();
    const profession = asText(data['profession'], 40), city = asText(data['city'], 120), interest = asText(data['interest'], 50);
    const allowedProfession = ['despachante', 'vistoriador', 'lojista', 'outros'];
    const allowedInterest = ['educacao', 'vistoria', 'documentos', 'lojistas'];
    if (name.length < 3 || !/^\+?\d{10,13}$/.test(phone) || !/^\S+@\S+\.\S+$/.test(email) || !allowedProfession.includes(profession) || !allowedInterest.includes(interest) || data['consent'] !== true) {
        throw new https_1.HttpsError('invalid-argument', 'Confira os dados e o consentimento.');
    }
    await db.collection('leads').add({ name, phone, email, profession, city, interest, consent: true, consentVersion: '2026-10', createdAt: firestore_1.FieldValue.serverTimestamp(), source: 'landing-sexta-marcha' });
    return { ok: true };
});
/** Creates an unapproved partner profile; never grants admin or financial permissions. */
exports.registerPartner = (0, https_1.onCall)({ region: 'southamerica-east1', enforceAppCheck: true, maxInstances: 10 }, async (request) => {
    if (!request.auth)
        throw new https_1.HttpsError('unauthenticated', 'Entre na sua conta.');
    const data = request.data;
    if (!data || typeof data !== 'object')
        throw new https_1.HttpsError('invalid-argument', 'Dados inválidos.');
    const name = asText(data['name'], 120), business = asText(data['business'], 120), city = asText(data['city'], 120);
    const phone = asText(data['phone'], 25).replace(/\D/g, '');
    const cnpj = asText(data['cnpj'], 20).replace(/\D/g, '');
    const crdd = asText(data['crdd'], 60);
    if (!validCnpj(cnpj) || crdd.length < 2)
        throw new https_1.HttpsError('invalid-argument', 'CNPJ ou registro CRDD inválido.');
    if (name.length < 3 || business.length < 2 || city.length < 3 || !/^[0-9]{10,13}$/.test(phone) || data['consent'] !== true) {
        throw new https_1.HttpsError('invalid-argument', 'Confira os dados obrigatórios.');
    }
    const { getAuth } = await Promise.resolve().then(() => __importStar(require('firebase-admin/auth')));
    const user = await getAuth().getUser(request.auth.uid);
    if (!user.email)
        throw new https_1.HttpsError('failed-precondition', 'E-mail não disponível.');
    const ref = db.collection('partners').doc(request.auth.uid);
    try {
        await ref.create({ uid: request.auth.uid, email: user.email.toLowerCase(), name, business, cnpj, crdd, phone, city,
            role: 'partner', status: 'pending', commissionRate: null, payoutStatus: 'not_configured',
            consent: true, consentVersion: '2026-11', createdAt: firestore_1.FieldValue.serverTimestamp(), source: 'cadastro-despachante' });
    }
    catch (e) {
        if (e?.code === 6 || e?.code === 'already-exists')
            throw new https_1.HttpsError('already-exists', 'Perfil já cadastrado.');
        throw e;
    }
    return { ok: true, status: 'pending' };
});
/** Validate CNPJ digits and check digits; not a substitute for registration verification. */
function validCnpj(value) {
    if (!/^\d{14}$/.test(value) || /^(\d)\1{13}$/.test(value))
        return false;
    const digit = (size) => { let sum = 0, weight = size - 7; for (let i = 0; i < size; i++) {
        sum += Number(value[i]) * weight;
        weight = weight === 2 ? 9 : weight - 1;
    } const rem = sum % 11; return rem < 2 ? 0 : 11 - rem; };
    return digit(12) === Number(value[12]) && digit(13) === Number(value[13]);
}
/** Only an existing active master can approve or suspend partners. */
exports.setPartnerStatus = (0, https_1.onCall)({ region: 'southamerica-east1', enforceAppCheck: true, maxInstances: 10 }, async (request) => {
    if (!request.auth)
        throw new https_1.HttpsError('unauthenticated', 'Entre na sua conta.');
    const caller = await db.collection('partners').doc(request.auth.uid).get();
    if (caller.data()?.['role'] !== 'master' || caller.data()?.['status'] !== 'active')
        throw new https_1.HttpsError('permission-denied', 'Acesso master necessário.');
    const data = request.data;
    const partnerId = asText(data?.['partnerId'], 128), status = asText(data?.['status'], 20);
    if (!partnerId || !['active', 'suspended'].includes(status))
        throw new https_1.HttpsError('invalid-argument', 'Dados inválidos.');
    if (partnerId === request.auth.uid)
        throw new https_1.HttpsError('failed-precondition', 'Não é permitido alterar o próprio perfil master.');
    const ref = db.collection('partners').doc(partnerId);
    const target = await ref.get();
    if (!target.exists)
        throw new https_1.HttpsError('not-found', 'Parceiro não encontrado.');
    if (target.data()?.['role'] !== 'partner')
        throw new https_1.HttpsError('permission-denied', 'Somente perfis de parceiro podem ser alterados.');
    await ref.update({ status, updatedAt: firestore_1.FieldValue.serverTimestamp(), updatedBy: request.auth.uid });
    return { ok: true, status };
});
