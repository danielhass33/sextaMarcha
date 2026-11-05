import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommercialService, PartnerProfile } from '../core/commercial.service';
import { courses } from '../data/courses';
@Component({standalone:true,imports:[CurrencyPipe,DecimalPipe,RouterLink],templateUrl:'./master.component.html',styleUrl:'./master.component.css'})
export class MasterComponent {
 readonly service=inject(CommercialService);
 readonly filter=signal(''); readonly status=signal('all'); readonly busy=signal(false); readonly error=signal('');
 get partners(){return this.service.partners().filter(p=>(this.status()==='all'||p.status===this.status())&&`${p.name} ${p.business} ${p.email} ${p.cnpj} ${p.crdd}`.toLowerCase().includes(this.filter().toLowerCase()));}
 get activeCount(){return this.service.partners().filter(p=>p.status==='active').length;}
 get paid(){return this.service.sales().filter(s=>s.status==='paid');}
 get revenue(){return this.paid.reduce((a,s)=>a+(Number(s.amount)||0),0);}
 get commission(){return this.paid.reduce((a,s)=>a+(Number(s.commissionAmount)||0),0);}
 count(uid:string){return this.paid.filter(s=>s.partnerId===uid).length;}
 total(uid:string){return this.paid.filter(s=>s.partnerId===uid).reduce((a,s)=>a+(Number(s.amount)||0),0);}
 courseName(id:string){return courses.find(c=>c.id===id)?.title||id;}
 partnerName(uid:string){return this.service.partners().find(p=>p.uid===uid)?.business||uid;}
 async reload(){this.busy.set(true);this.error.set('');try{await this.service.refresh();}catch{this.error.set('Falha ao atualizar.');}finally{this.busy.set(false);}}
 async changeStatus(p:PartnerProfile,status:'active'|'suspended'){
  if(!confirm(`Confirmar alteração de ${p.business} para ${status}?`))return;
  this.busy.set(true);this.error.set('');
  try{
   const {httpsCallable}=await import('firebase/functions');
   const {functions}=await import('../core/firebase');
   if(!functions)throw Error('Firebase não configurado');
   await httpsCallable(functions,'setPartnerStatus')({partnerId:p.uid,status});
   await this.service.refresh();
  }catch{this.error.set('Não foi possível atualizar o parceiro. Confira as permissões e a Cloud Function.');}finally{this.busy.set(false);}
 }
}
