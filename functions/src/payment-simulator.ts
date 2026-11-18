import {onCall,HttpsError} from "firebase-functions/v2/https";
/** Legado desativado: o fluxo de homologação deve passar pelo checkout do cliente. */
export const simulateCoursePayment=onCall({region:"southamerica-east1",enforceAppCheck:true,maxInstances:5},async()=>{
 throw new HttpsError("failed-precondition","O pagamento de teste deve ser confirmado exclusivamente na página de compra do cliente.");
});
