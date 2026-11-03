import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { CommercialService } from '../core/commercial.service';
import { courses } from '../data/courses';
@Component({standalone:true,imports:[FormsModule,DecimalPipe,CurrencyPipe],styles:[`:host{display:block;background:#f8f8f8;min-height:75vh}.portal{max-width:1120px;margin:auto;padding:90px 22px;color:#171717}.panel{background:white;border:1px solid #ddd;border-radius:14px;padding:24px;margin:20px 0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.metric{background:#f4f4f4;padding:20px;border-radius:10px}.metric strong{font-size:28px;display:block;margin-top:10px}.muted{color:#666}.orange{color:#d86b1b}input{display:block;width:100%;max-width:360px;padding:13px;margin:12px 0;border:1px solid #ccc;border-radius:7px}button{background:#e97824;border:0;padding:13px 20px;font-weight:800;border-radius:8px;cursor:pointer}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:12px;border-bottom:1px solid #eee} .scroll{overflow:auto}`],template:`
<main class="portal"><h1>Portal Sexta Marcha</h1><p class="muted">Gestão de vendas, cursos e comissões</p>
@if(service.loading()){<p>Verificando acesso...</p>}@else if(!service.user()){
<section class="panel"><h2>Login do parceiro</h2><form (ngSubmit)="login()"><label>E-mail<input name="email" type="email" autocomplete="username" [(ngModel)]="email" required></label><label>Senha<input name="password" type="password" autocomplete="current-password" [(ngModel)]="password" required></label><button type="submit" [disabled]="busy()">{{busy()?'Entrando...':'Entrar'}}</button></form>@if(error()){<p role="alert" class="orange">{{error()}}</p>}<p class="muted">O acesso depende de habilitação prévia do estabelecimento pela Sexta Marcha.</p></section>
}@else if(!service.role()){<section class="panel"><h2>Cadastro aguardando habilitação</h2><p>Seu usuário ainda não possui um perfil comercial ativo. Solicite a liberação à equipe Sexta Marcha.</p><button (click)="service.logout()">Sair</button></section>}
@else{<section class="panel"><div class="grid"><div class="metric">Vendas confirmadas<strong>{{confirmed.length|number}}</strong></div><div class="metric">Faturamento confirmado<strong>{{revenue|currency:'BRL'}}</strong></div><div class="metric">Comissões registradas<strong>{{commission|currency:'BRL'}}</strong></div><div class="metric">Parceiros com vendas<strong>{{partners}}</strong></div></div><p class="muted">Indicadores calculados somente com vendas confirmadas registradas no Firestore. Não representam valores liquidados ou disponíveis para saque.</p><button (click)="refresh()">Atualizar dados</button> <button (click)="service.logout()">Sair</button></section>
<section class="panel"><h2>Vendas por curso</h2><div class="scroll"><table><thead><tr><th>Curso</th><th>Quantidade</th><th>Faturamento</th></tr></thead><tbody>@for(c of catalog;track c.id){@if(courseCount(c.id)>0){<tr><td>{{c.title}}</td><td>{{courseCount(c.id)}}</td><td>{{courseRevenue(c.id)|currency:'BRL'}}</td></tr>}}</tbody></table></div>@if(!confirmed.length){<p class="muted">Nenhuma venda confirmada registrada.</p>}</section>
<section class="panel"><h2>Histórico de vendas</h2><div class="scroll"><table><thead><tr><th>ID</th><th>Despachante</th><th>Curso</th><th>Valor</th><th>Comissão</th><th>Status</th></tr></thead><tbody>@for(s of service.sales();track s.id){<tr><td>{{s.id}}</td><td>{{s.partnerId}}</td><td>{{courseName(s.courseId)}}</td><td>{{s.amount|currency:'BRL'}}</td><td>{{s.commissionAmount|currency:'BRL'}}</td><td>{{s.status}}</td></tr>}</tbody></table></div></section>
<section class="panel"><h2>Próxima etapa: operação financeira</h2><p>Cadastro de alunos, checkout, matrícula e repasse semanal serão habilitados somente após integração com provedor financeiro e parceiro educacional. Este painel não cria vendas ou transferências fictícias.</p></section>
}
</main>`}) export class PortalComponent {
 readonly service=inject(CommercialService); readonly catalog=courses;
 email='';password='';busy=signal(false);error=signal('');
 async login(){this.busy.set(true);this.error.set('');try{await this.service.login(this.email,this.password);}catch{this.error.set('Não foi possível entrar. Confira as credenciais e a habilitação.');}finally{this.busy.set(false);}}
 async refresh(){try{await this.service.refresh();}catch{this.error.set('Erro ao atualizar dados.');}}
 get confirmed(){return this.service.sales().filter(s=>s.status==='paid');}
 get revenue(){return this.confirmed.reduce((a,s)=>a+(Number(s.amount)||0),0);}
 get commission(){return this.confirmed.reduce((a,s)=>a+(Number(s.commissionAmount)||0),0);}
 get partners(){return new Set(this.confirmed.map(s=>s.partnerId)).size;}
 courseCount(id:string){return this.confirmed.filter(s=>s.courseId===id).length;}
 courseRevenue(id:string){return this.confirmed.filter(s=>s.courseId===id).reduce((a,s)=>a+(Number(s.amount)||0),0);}
 courseName(id:string){return courses.find(c=>c.id===id)?.title||id;}
}
