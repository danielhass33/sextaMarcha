import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import { firebaseApp, functions } from '../core/firebase';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  styles: [`
    :host{display:block;background:#0b0b0b;color:#fff;min-height:85vh}
    .wrap-signup{max-width:1100px;margin:auto;padding:110px 24px 90px;display:grid;grid-template-columns:1fr 1fr;gap:70px}
    .ey{color:#f18a32;letter-spacing:.15em;font-size:12px;font-weight:800}
    h1{font-size:clamp(40px,5vw,74px);line-height:1.02;margin:25px 0;font-weight:900}
    h1 span{color:#f18a32}p{line-height:1.7;color:#aaa}.form{background:#171717;border:1px solid #343434;padding:32px;border-radius:14px}
    label{display:block;font-size:12px;font-weight:700;letter-spacing:.05em;margin:17px 0 6px}
    input{width:100%;box-sizing:border-box;padding:14px;background:#0d0d0d;border:1px solid #444;color:white;border-radius:5px;font:inherit}
    input:focus{outline:1px solid #f18a32}.check{display:flex;gap:12px;align-items:flex-start;margin:22px 0}.check input{width:auto;margin-top:5px}
    .check label{margin:0;font-size:12px;line-height:1.6;color:#bbb;font-weight:400}
    button{width:100%;background:#ed7b23;color:#0b0b0b;border:0;padding:17px;font-weight:900;cursor:pointer;border-radius:5px}
    button:disabled{opacity:.55;cursor:wait}.error{color:#ffb6a8}.success{color:#9ee2b2}a{color:#f18a32}
    @media(max-width:760px){.wrap-signup{grid-template-columns:1fr;padding:90px 20px 60px;gap:20px}.form{padding:22px}}
  `],
  template: `
    <main class="wrap-signup">
      <section>
        <div class="ey">SEXTA MARCHA / SEJA PARCEIRO</div>
        <h1>SEU NEGÓCIO.<br><span>NOVA MARCHA.</span></h1>
        <p>Crie seu acesso ao portal do despachante. Depois da análise do cadastro, seu estabelecimento poderá comercializar os cursos disponíveis, acompanhar cada venda e consultar as comissões com fechamento semanal.</p>
        <p>Já possui cadastro? <a routerLink="/portal">Acessar portal ↗</a></p>
      </section>
      <section class="form">
        <div class="ey">CADASTRO DE PARCEIRO</div>
        <h2>CRIAR MEU ACESSO</h2>
        <form (ngSubmit)="register()">
          <label for="partner-name">NOME COMPLETO *</label>
          <input id="partner-name" name="name" [(ngModel)]="name" autocomplete="name" minlength="3" maxlength="120" required>
          <label for="partner-business">NOME DO ESTABELECIMENTO *</label>
          <input id="partner-business" name="business" [(ngModel)]="business" maxlength="120" required>
          <label for="partner-phone">WHATSAPP COM DDD *</label>
          <input id="partner-phone" name="phone" [(ngModel)]="phone" autocomplete="tel" type="tel" required>
          <label for="partner-city">CIDADE / UF *</label>
          <input id="partner-city" name="city" [(ngModel)]="city" maxlength="120" required>
          <label for="partner-email">E-MAIL DE ACESSO *</label>
          <input id="partner-email" name="email" [(ngModel)]="email" autocomplete="email" type="email" required>
          <label for="partner-password">SENHA (MÍNIMO 12 CARACTERES) *</label>
          <input id="partner-password" name="password" [(ngModel)]="password" autocomplete="new-password" type="password" minlength="12" required>
          <label for="partner-confirm">CONFIRMAR SENHA *</label>
          <input id="partner-confirm" name="confirm" [(ngModel)]="confirm" autocomplete="new-password" type="password" required>
          <div class="check"><input id="partner-consent" name="consent" [(ngModel)]="consent" type="checkbox" required><label for="partner-consent">Concordo com o tratamento dos meus dados para análise do cadastro e operação da plataforma, conforme a política de privacidade aplicável. *</label></div>
          <button type="submit" [disabled]="busy()">{{ busy() ? 'CRIANDO ACESSO...' : 'CRIAR CONTA ↗' }}</button>
          @if(error()){<p class="error" role="alert">{{error()}}</p>}
          @if(success()){<p class="success" role="status">{{success()}}</p>}
        </form>
      </section>
    </main>
  `
})
export class PartnerSignupComponent {
  private readonly router=inject(Router);
  name='';business='';phone='';city='';email='';password='';confirm='';consent=false;
  readonly busy=signal(false);readonly error=signal('');readonly success=signal('');
  async register(){
    if(this.busy())return;
    this.error.set('');this.success.set('');
    if(!this.name.trim()||!this.business.trim()||!this.city.trim()||!/^\+?\d{10,13}$/.test(this.phone.replace(/\D/g,''))||!this.consent){this.error.set('Confira os dados obrigatórios e o consentimento.');return;}
    if(this.password.length<12||this.password!==this.confirm){this.error.set('Use uma senha de pelo menos 12 caracteres e confirme-a corretamente.');return;}
    if(!firebaseApp||!functions){this.error.set('Firebase ainda não configurado.');return;}
    this.busy.set(true);
    const auth=getAuth(firebaseApp);
    let created=false;
    try{
      const credential=await createUserWithEmailAndPassword(auth,this.email.trim().toLowerCase(),this.password);
      created=true;
      await sendEmailVerification(credential.user);
      const callable=httpsCallable(functions,'registerPartner');
      await callable({name:this.name,business:this.business,phone:this.phone,city:this.city,consent:this.consent});
      this.password='';this.confirm='';
      this.success.set('Conta criada! Confirme seu e-mail. Seu cadastro ficará em análise até a habilitação comercial.');
      await this.router.navigateByUrl('/portal');
    }catch(e:any){
      this.error.set(created?'A conta foi criada, mas não foi possível concluir o perfil. Entre em contato com o suporte antes de tentar outro e-mail.':e?.code==='auth/email-already-in-use'?'Este e-mail já possui conta. Entre pelo portal ou recupere sua senha.':'Não foi possível criar sua conta. Verifique os dados e tente novamente.');
      if(created)await signOut(auth).catch(()=>{});
    }finally{this.busy.set(false);}
  }
}
