import { Injectable, signal } from "@angular/core";
import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

export interface CourseOrderSummary {
  id: string;
  partnerId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  commissionCents: number;
  courseId: string;
  courseTitle: string;
  amountCents: number;
  paymentStatus: string;
  enrollmentStatus: string;
  gateway: string;
  environment: string;
  createdAt: string | null;
}

export interface StudentOrderInput {
  fullName: string;
  document: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  cnh: string;
  cnhCategory: string;
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
  };
}

@Injectable({ providedIn: "root" })
export class CourseOrdersService {
  readonly orders = signal<CourseOrderSummary[]>([]);
  readonly loading = signal(false);

  async create(student: StudentOrderInput, requestId: string): Promise<{orderId:string;checkoutToken:string|null}> {
    if (!functions) {
      throw new Error("Firebase não configurado.");
    }

    const callable = httpsCallable<
      {
        courseId: string;
        requestId: string;
        student: StudentOrderInput;
        consent: boolean;
      },
      { ok: boolean; orderId: string; checkoutToken: string|null }
    >(functions, "createTestCourseOrder");

    const result = await callable({
      courseId: "118sc-icetran",
      requestId,
      student,
      consent: true,
    });

    await this.refresh();
    return {orderId:result.data.orderId,checkoutToken:result.data.checkoutToken};
  }

  async renewLink(orderId:string):Promise<string> {
    if (!functions) throw new Error("Firebase não configurado.");
    const fn=httpsCallable<{orderId:string},{token:string}>(functions,"renewCheckoutLink");
    return (await fn({orderId})).data.token;
  }

  async refresh() {
    if (!functions) {
      throw new Error("Firebase não configurado.");
    }

    this.loading.set(true);

    try {
      const callable = httpsCallable<
        Record<string, never>,
        { orders: CourseOrderSummary[] }
      >(functions, "listCourseOrders");

      const result = await callable({});

      this.orders.set(
        result.data.orders.sort((a, b) =>
          (b.createdAt ?? "").localeCompare(a.createdAt ?? ""),
        ),
      );
    } finally {
      this.loading.set(false);
    }
  }

  clear() {
    this.orders.set([]);
  }

  async simulatePayment(orderId: string) {
    if (!functions) {
      throw new Error("Firebase não configurado.");
    }

    const callable = httpsCallable<
      { orderId: string },
      {
        ok: boolean;
        alreadyProcessed: boolean;
        orderId: string;
      }
    >(functions, "simulateCoursePayment");

    const result = await callable({ orderId });

    await this.refresh();

    return result.data;
  }
}
