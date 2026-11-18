import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";
import { COURSE_OFFERS, publicOffer } from "./course-offers";

const db = getFirestore();

export const listCourseOffers = onCall(
  {
    region: "southamerica-east1",
    enforceAppCheck: true,
    maxInstances: 10,
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError(
        "unauthenticated",
        "Faça login para consultar as ofertas.",
      );
    }

    const partner = await db.collection("partners").doc(request.auth.uid).get();

    const profile = partner.data();

    if (
      profile?.["status"] !== "active" ||
      !["partner", "master"].includes(profile?.["role"])
    ) {
      throw new HttpsError(
        "permission-denied",
        "Perfil comercial não autorizado.",
      );
    }

    return {
      offers: COURSE_OFFERS.filter((offer) => offer.status === "active").map(
        publicOffer,
      ),
    };
  },
);
