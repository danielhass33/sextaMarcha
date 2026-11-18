import { EnrollmentCourse, StudentEnrollment } from "./enrollment.model";

export function buildIcetranDraft(
  student: StudentEnrollment,
  course: EnrollmentCourse,
) {
  return {
    customer: {
      firstName: student.fullName.trim(),
      dateOfBirth: student.dateOfBirth,
      identityNumber: student.document.replace(/\D/g, ""),
      email: student.email.trim().toLowerCase(),
      primaryPhone: student.phone,
      address: {
        postCode: student.address.zipCode.replace(/\D/g, ""),
        street: student.address.street,
        number: student.address.number,
        complement: student.address.complement,
        district: student.address.district,
        city: student.address.city,
        state: student.address.state,
        country: "Brasil",
      },
    },

    items: [
      {
        referenceCode: course.referenceCode,
        integration: {
          ...course.integration,
        },
        properties: [
          {
            referenceCode: "cnh",
            value: student.cnh.replace(/\D/g, ""),
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
