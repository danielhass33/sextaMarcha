import { Injectable } from '@angular/core';
import { httpsCallable } from 'firebase/functions';
import { firebaseReady, functions } from './firebase';
export interface LeadPayload { name: string; phone: string; email: string; profession: string; city: string; interest: string; consent: boolean; }
@Injectable({providedIn:'root'})
export class LeadService {
  async submit(data: LeadPayload): Promise<void> {
    if (!firebaseReady || !functions) throw new Error('Firebase ainda não configurado. Nenhum dado foi enviado.');
    const callable = httpsCallable<LeadPayload, {ok:boolean}>(functions, 'submitLead');
    const response = await callable(data);
    if (!response.data.ok) throw new Error('Não foi possível confirmar o cadastro.');
  }
}
