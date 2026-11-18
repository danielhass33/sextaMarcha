import { Course, Student } from "./course-order.model";

export interface IcetranEnrollmentDraft {
  customer: {
    firstName: string;
    dateOfBirth: string;
    identityNumber: string;
    email: string;
    primaryPhone: string;
    address: {
      postCode: string;
      street: string;
      number: string;
      complement: string;
      district: string;
      city: string;
      state: string;
      country: string;
    };
  };
  items: Array<{
    referenceCode: string;
    integration: Course["integration"];
    properties: Array<{
      referenceCode: string;
      value: string;
    }>;
  }>;
}

export function mapEnrollmentDraft(
  student: Student,
  course: Course,
): IcetranEnrollmentDraft {
  return {
    customer: {
      firstName: student.fullName,
      dateOfBirth: student.dateOfBirth,
      identityNumber: student.document,
      email: student.email,
      primaryPhone: student.phone,
      address: {
        postCode: student.address.zipCode,
        street: student.address.street,
        number: student.address.number,
        complement: student.address.complement ?? "",
        district: student.address.district,
        city: student.address.city,
        state: student.address.state,
        country: "Brasil",
      },
    },
    items: [
      {
        referenceCode: course.referenceCode,
        integration: course.integration,
        properties: [
          {
            referenceCode: "cnh",
            value: student.cnh,
          },
          {
            referenceCode: "categoria",
            value: student.cnhCategory.toLowerCase(),
          },
        ],
      },
    ],
  };
}
