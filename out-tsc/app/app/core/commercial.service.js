import { Injectable, signal } from "@angular/core";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, where, } from "firebase/firestore";
import { firebaseApp } from "./firebase";
import * as i0 from "@angular/core";
export class CommercialService {
    constructor() {
        this.user = signal(null, ...(ngDevMode ? [{ debugName: "user" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.profile = signal(null, ...(ngDevMode ? [{ debugName: "profile" }] : []));
        this.sales = signal([], ...(ngDevMode ? [{ debugName: "sales" }] : []));
        this.partners = signal([], ...(ngDevMode ? [{ debugName: "partners" }] : []));
        this.error = signal("", ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.role = signal(null, ...(ngDevMode ? [{ debugName: "role" }] : []));
        this.auth = firebaseApp ? getAuth(firebaseApp) : null;
        this.db = firebaseApp ? getFirestore(firebaseApp) : null;
        if (!this.auth || !this.db) {
            this.loading.set(false);
            this.error.set("Configure o Firebase em environment.ts.");
            return;
        }
        onAuthStateChanged(this.auth, async (user) => {
            this.loading.set(true);
            this.user.set(user);
            this.profile.set(null);
            this.role.set(null);
            this.sales.set([]);
            this.partners.set([]);
            this.error.set("");
            if (user) {
                try {
                    const snap = await getDoc(doc(this.db, "partners", user.uid));
                    if (snap.exists()) {
                        const p = { ...snap.data(), uid: user.uid };
                        this.profile.set(p);
                        if (p.status === "active" &&
                            (p.role === "partner" || p.role === "master"))
                            this.role.set(p.role);
                        if (this.role())
                            await this.refresh();
                    }
                }
                catch (e) {
                    this.error.set("Não foi possível carregar seu perfil. Confira a conexão e as permissões do Firestore.");
                    console.error(e);
                }
            }
            this.loading.set(false);
        });
    }
    async reloadProfile() {
        if (!this.db || !this.user())
            return;
        const snap = await getDoc(doc(this.db, "partners", this.user().uid));
        if (!snap.exists())
            return;
        const p = { ...snap.data(), uid: this.user().uid };
        this.profile.set(p);
        this.role.set(p.status === "active" && (p.role === "partner" || p.role === "master")
            ? p.role
            : null);
        if (this.role())
            await this.refresh();
    }
    async login(email, password) {
        if (!this.auth)
            throw Error("Firebase não configurado");
        await signInWithEmailAndPassword(this.auth, email.trim(), password);
    }
    async logout() {
        if (this.auth)
            await signOut(this.auth);
    }
    async resetPassword(email) {
        if (!this.auth)
            throw Error("Firebase não configurado");
        await sendPasswordResetEmail(this.auth, email.trim());
    }
    async refresh() {
        if (!this.db || !this.user() || !this.role())
            return;
        const master = this.role() === "master";
        const salesRef = collection(this.db, "sales");
        const salesQuery = master
            ? salesRef
            : query(salesRef, where("partnerId", "==", this.user().uid));
        const [sales, partners] = await Promise.all([
            getDocs(salesQuery),
            master ? getDocs(collection(this.db, "partners")) : Promise.resolve(null),
        ]);
        this.sales.set(sales.docs.map((d) => ({ id: d.id, ...d.data() })));
        this.partners.set(partners
            ? partners.docs.map((d) => ({ uid: d.id, ...d.data() }))
            : []);
    }
    static { this.ɵfac = function CommercialService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommercialService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommercialService, factory: CommercialService.ɵfac, providedIn: "root" }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommercialService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [], null); })();
//# sourceMappingURL=commercial.service.js.map