import { Injectable } from '@angular/core';
import { httpsCallable } from 'firebase/functions';
import { firebaseReady, functions } from './firebase';
import * as i0 from "@angular/core";
export class LeadService {
    async submit(data) {
        if (!firebaseReady || !functions)
            throw new Error('Firebase ainda não configurado. Nenhum dado foi enviado.');
        const callable = httpsCallable(functions, 'submitLead');
        const response = await callable(data);
        if (!response.data.ok)
            throw new Error('Não foi possível confirmar o cadastro.');
    }
    static { this.ɵfac = function LeadService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LeadService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LeadService, factory: LeadService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LeadService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=lead.service.js.map