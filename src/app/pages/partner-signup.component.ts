import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { firebaseApp, functions } from "../core/firebase";

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  styleUrl: "./partner-signup.component.css",
  templateUrl: "./partner-signup.component.html",
})
export class PartnerSignupComponent {
  private readonly router = inject(Router);
  name = "";
  business = "";
  phone = "";
  city = "";
  email = "";
  password = "";
  confirm = "";
  consent = false;
  readonly busy = signal(false);
  readonly error = signal("");
  readonly success = signal("");
  async register() {
    if (this.busy()) return;
    this.error.set("");
    this.success.set("");
    if (
      !this.name.trim() ||
      !this.business.trim() ||
      !this.city.trim() ||
      !/^\+?\d{10,13}$/.test(this.phone.replace(/\D/g, "")) ||
      !this.consent
    ) {
      this.error.set("Confira os dados obrigatórios e o consentimento.");
      return;
    }
    if (this.password.length < 12 || this.password !== this.confirm) {
      this.error.set(
        "Use uma senha de pelo menos 12 caracteres e confirme-a corretamente.",
      );
      return;
    }
    if (!firebaseApp || !functions) {
      this.error.set("Firebase ainda não configurado.");
      return;
    }
    this.busy.set(true);
    const auth = getAuth(firebaseApp);
    let created = false;
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        this.email.trim().toLowerCase(),
        this.password,
      );
      created = true;
      await sendEmailVerification(credential.user);
      const callable = httpsCallable(functions, "registerPartner");
      await callable({
        name: this.name,
        business: this.business,
        phone: this.phone,
        city: this.city,
        consent: this.consent,
      });
      this.password = "";
      this.confirm = "";
      this.success.set(
        "Conta criada! Confirme seu e-mail. Seu cadastro ficará em análise até a habilitação comercial.",
      );
      await this.router.navigateByUrl("/portal");
    } catch (e: any) {
      this.error.set(
        created
          ? "A conta foi criada, mas não foi possível concluir o perfil. Entre em contato com o suporte antes de tentar outro e-mail."
          : e?.code === "auth/email-already-in-use"
            ? "Este e-mail já possui conta. Entre pelo portal ou recupere sua senha."
            : "Não foi possível criar sua conta. Verifique os dados e tente novamente.",
      );
      if (created) await signOut(auth).catch(() => {});
    } finally {
      this.busy.set(false);
    }
  }
}
