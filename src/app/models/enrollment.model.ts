export interface StudentEnrollment {
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

export interface IcetranCourseIntegration {
  idoferta: string;
  idcurso: string;
  idcfc: string;
  idturma: string;
  idatendente: string;
}

export interface EnrollmentCourse {
  id: string;
  title: string;
  referenceCode: string;
  priceCents: number;
  integration: IcetranCourseIntegration;
}

export type OrderPaymentStatus =
  | "draft"
  | "pending"
  | "paid"
  | "failed"
  | "expired"
  | "canceled"
  | "refunded";

export type OrderEnrollmentStatus =
  | "not_requested"
  | "processing"
  | "confirmed"
  | "failed";

export interface CourseOrder {
  id: string;
  partnerId: string;
  studentId: string;
  courseId: string;

  amountCents: number;

  paymentStatus: OrderPaymentStatus;
  enrollmentStatus: OrderEnrollmentStatus;

  gateway: "mock" | "pagarme";
  gatewayOrderId?: string;

  createdAt?: unknown;
  updatedAt?: unknown;
}
