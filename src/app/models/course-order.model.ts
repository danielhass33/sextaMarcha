export type PaymentStatus =
  | "draft"
  | "pending"
  | "paid"
  | "failed"
  | "expired"
  | "canceled"
  | "refunded";

export type EnrollmentStatus =
  | "not_requested"
  | "processing"
  | "confirmed"
  | "failed"
  | "canceled";

export interface CourseIntegration {
  idoferta: string;
  idcurso: string;
  idcfc: string;
  idturma: string;
  idatendente: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  priceCents: number;
  referenceCode: string;
  state: string;
  active: boolean;
  integration: CourseIntegration;
}

export interface Student {
  id?: string;
  fullName: string;
  dateOfBirth: string;
  document: string;
  email: string;
  phone: string;
  cnh: string;
  cnhCategory: string;
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
  };
}

export interface CourseOrder {
  id: string;
  partnerId: string;
  studentId: string;
  courseId: string;

  amountCents: number;
  paymentStatus: PaymentStatus;
  enrollmentStatus: EnrollmentStatus;

  gateway: "mock" | "pagarme";
  gatewayOrderId?: string;
  gatewayChargeId?: string;

  createdAt: unknown;
  updatedAt: unknown;
}
