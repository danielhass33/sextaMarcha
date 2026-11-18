import { Injectable, signal } from "@angular/core";
import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";
import * as i0 from "@angular/core";
export class CourseOrdersService {
    constructor() {
        this.orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    }
    async create(student, requestId) {
        if (!functions) {
            throw new Error("Firebase não configurado.");
        }
        const callable = httpsCallable(functions, "createTestCourseOrder");
        const result = await callable({
            courseId: "118sc-icetran",
            requestId,
            student,
            consent: true,
        });
        await this.refresh();
        return { orderId: result.data.orderId, checkoutToken: result.data.checkoutToken };
    }
    async renewLink(orderId) {
        if (!functions)
            throw new Error("Firebase não configurado.");
        const fn = httpsCallable(functions, "renewCheckoutLink");
        return (await fn({ orderId })).data.token;
    }
    async refresh() {
        if (!functions) {
            throw new Error("Firebase não configurado.");
        }
        this.loading.set(true);
        try {
            const callable = httpsCallable(functions, "listCourseOrders");
            const result = await callable({});
            this.orders.set(result.data.orders.sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? "")));
        }
        finally {
            this.loading.set(false);
        }
    }
    clear() {
        this.orders.set([]);
    }
    async simulatePayment(orderId) {
        if (!functions) {
            throw new Error("Firebase não configurado.");
        }
        const callable = httpsCallable(functions, "simulateCoursePayment");
        const result = await callable({ orderId });
        await this.refresh();
        return result.data;
    }
    static { this.ɵfac = function CourseOrdersService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourseOrdersService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CourseOrdersService, factory: CourseOrdersService.ɵfac, providedIn: "root" }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseOrdersService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], null, null); })();
//# sourceMappingURL=course-orders.service.js.map