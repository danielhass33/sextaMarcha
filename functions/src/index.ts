import {onCall,HttpsError} from 'firebase-functions/v2/https';
import {initializeApp} from 'firebase-admin/app';
import {getFirestore,FieldValue} from 'firebase-admin/firestore';
initializeApp();
const db=getFirestore();
const asText=(v:unknown,max:number)=>typeof v==='string'?v.trim().slice(0,max):'';
export const submitLead=onCall({region:'southamerica-east1',enforceAppCheck:true,maxInstances:5},async(request)=>{
 const data=request.data as Record<string,unknown>|null;
 if(!data||typeof data!=='object')throw new HttpsError('invalid-argument','Dados inválidos.');
 const name=asText(data['name'],120),phone=asText(data['phone'],25).replace(/[^\d+]/g,''),email=asText(data['email'],180).toLowerCase();
 const profession=asText(data['profession'],40),city=asText(data['city'],120),interest=asText(data['interest'],50);
 const allowedProfession=['despachante','vistoriador','lojista','outros'];
 const allowedInterest=['educacao','vistoria','documentos','lojistas'];
 if(name.length<3||!/^\+?\d{10,13}$/.test(phone)||!/^\S+@\S+\.\S+$/.test(email)||!allowedProfession.includes(profession)||!allowedInterest.includes(interest)||data['consent']!==true){
  throw new HttpsError('invalid-argument','Confira os dados e o consentimento.');
 }
 await db.collection('leads').add({name,phone,email,profession,city,interest,consent:true,consentVersion:'2026-10',createdAt:FieldValue.serverTimestamp(),source:'landing-sexta-marcha'});
 return {ok:true};
});
