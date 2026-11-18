export interface CourseOffer {
  id: string;
  courseId: string;
  title: string;
  referenceCode: string;
  state: string | null;
  priceCents: number;
  currency: "BRL";
  environment: "sandbox" | "production";
  status: "active" | "inactive";
  integration: {
    idoferta: string;
    idcurso: string;
    idcfc: string;
    idturma: string;
    idatendente: string;
  };
}

export const COURSE_OFFERS: ReadonlyArray<CourseOffer> = [
  {
    id: "118sc-icetran",
    courseId: "reciclagem",
    title: "Curso de Reciclagem para Condutores Infratores | Santa Catarina",
    referenceCode: "118sc-icetran",
    state: "SC",
    priceCents: 12000,
    currency: "BRL",
    environment: "sandbox",
    status: "active",
    integration: {
      idoferta: "198",
      idcurso: "118",
      idcfc: "1647",
      idturma: "676",
      idatendente: "2",
    },
  },
];

export function getActiveOffer(offerId: string): CourseOffer | undefined {
  return COURSE_OFFERS.find(
    (offer) => offer.id === offerId && offer.status === "active",
  );
}

export function publicOffer(offer: CourseOffer) {
  return {
    id: offer.id,
    courseId: offer.courseId,
    title: offer.title,
    state: offer.state,
    priceCents: offer.priceCents,
    currency: offer.currency,
    environment: offer.environment,
    status: offer.status,
  };
}
