import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CurrencyPipe } from "@angular/common";
import { httpsCallable } from "firebase/functions";
import { functions } from "../core/firebase";

type CheckoutInfo = {
  courseTitle: string;
  amountCents: number;
  state: string;
  environment: string;
  paymentStatus: string;
  studentName: string;
  studentEmail: string;
  studentPhoneLast4: string;
};
@Component({
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: "./checkout.component.html",
  styleUrl: "./checkout.component.css",
})
export class CheckoutComponent implements OnInit {
  private route = inject(ActivatedRoute);
  readonly loading = signal(true);
  readonly processing = signal(false);
  readonly error = signal("");
  readonly info = signal<CheckoutInfo | null>(null);
  private token = "";
  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") ?? "";
    if (!functions) {
      this.error.set("Firebase não configurado.");
      this.loading.set(false);
      return;
    }
    try {
      const fn = httpsCallable<{ token: string }, CheckoutInfo>(
        functions,
        "getPublicCheckout",
      );
      this.info.set((await fn({ token: this.token })).data);
    } catch (err: unknown) {
      console.error("Erro ao carregar checkout:", err);

      const code =
        typeof err === "object" && err !== null && "code" in err
          ? String(err.code)
          : "";

      if (code === "functions/not-found") {
        this.error.set(
          "Este link expirou ou não está mais disponível. Solicite um novo link ao despachante.",
        );
      } else {
        this.error.set(
          "Não conseguimos consultar seu pedido agora. Tente novamente em alguns instantes.",
        );
      }
    } finally {
      this.loading.set(false);
    }
  }
  async pay() {
    if (
      this.processing() ||
      this.info()?.paymentStatus === "paid" ||
      !functions
    )
      return;
    this.processing.set(true);
    this.error.set("");
    try {
      const fn = httpsCallable<{ token: string }, { ok: boolean }>(
        functions,
        "confirmSandboxCheckout",
      );
      await fn({ token: this.token });
      this.info.update((info) =>
        info ? { ...info, paymentStatus: "paid" } : info,
      );
    } catch {
      this.error.set("Não foi possível confirmar o teste. Tente novamente.");
    } finally {
      this.processing.set(false);
    }
  }
}
