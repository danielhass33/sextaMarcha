import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommercialService } from '../core/commercial.service';
import { courses } from '../data/courses';
@Component({standalone:true,imports:[FormsModule,CurrencyPipe,DecimalPipe,RouterLink],templateUrl:'./portal.component.html',styleUrl:'./portal.component.css'})
export class PortalComponent {
 readonly service=inject(CommercialService);
 readonly catalog=courses;
 email='';password='';busy=signal(false);error=signal('');notice=signal('');
 async login(){this.busy.set(true);this.error.set('');try{await this.service.login(this.email,this.password);}catch{this.error.set('Não foi possível entrar. Confira e-mail e senha.');}finally{this.busy.set(false);}}
 async reset(){if(!this.email){this.error.set('Informe seu e-mail para recuperar a senha.');return;}try{await this.service.resetPassword(this.email);this.notice.set('Se houver uma conta com esse e-mail, você receberá instruções.');}catch{this.error.set('Não foi possível enviar a recuperação.');}}
 async refresh(){try{await this.service.refresh();}catch{this.error.set('Não foi possível atualizar os dados.');}}
 get paid(){return this.service.sales().filter(s=>s.status==='paid');}
 get revenue(){return this.paid.reduce((a,s)=>a+(Number(s.amount)||0),0);}
 get commission(){return this.paid.reduce((a,s)=>a+(Number(s.commissionAmount)||0),0);}
 get count(){return this.paid.length;}
 courseName(id:string){return this.catalog.find(c=>c.id===id)?.title||id;}
}
