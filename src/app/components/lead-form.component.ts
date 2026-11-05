import { Component, computed, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { LeadService } from "../core/lead.service";
@Component({
    selector: "app-lead-form",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: "./lead-form.component.html",
  styleUrl: "./lead-form.component.css",
})
export class LeadFormComponent {
    private fb = inject(FormBuilder);
    private leadService = inject(LeadService);
    step = signal(1);
    accelerating = signal(false);
    loading = signal(false);
    message = signal("");
    hasError = signal(false);
    progress = computed(() => (this.step() / 3) * 100);
    form = this.fb.nonNullable.group({
        profession: ["", Validators.required],
        interest: ["educacao", Validators.required],
        name: ["", [Validators.required, Validators.minLength(3)]],
        phone: [
            "",
            [Validators.required, Validators.pattern(/^[+()\d\s-]{10,20}$/)],
        ],
        email: ["", [Validators.required, Validators.email]],
        city: [""],
        consent: [false, Validators.requiredTrue],
    });
    professionLabel() {
        return (
            (
                {
                    despachante: "Despachante",
                    vistoriador: "Vistoriador",
                    lojista: "Lojista",
                    outros: "Outro profissional",
                } as Record<string, string>
            )[this.form.controls.profession.value] || ""
        );
    }
    previous() {
        this.message.set("");
        this.step.update((v) => Math.max(1, v - 1));
    }
    async next() {
        this.message.set("");
        this.hasError.set(false);
        const fields =
            this.step() === 1
                ? ["profession", "interest"]
                : this.step() === 2
                    ? ["name", "phone", "email"]
                    : ["consent"];
        for (const key of fields) {
            const control = this.form.get(key);
            control?.markAsTouched();
            if (control?.invalid) {
                this.hasError.set(true);
                this.message.set("Confira os campos obrigatórios antes de continuar.");
                return;
            }
        }
        if (this.step() < 3) {
            this.accelerating.set(true);
            await new Promise<void>((resolve) => setTimeout(resolve, 330));
            this.step.update((v) => v + 1);
            this.accelerating.set(false);
            return;
        }
        this.loading.set(true);
        try {
            await this.leadService.submit(this.form.getRawValue());
            this.message.set("Cadastro recebido! Em breve entraremos em contato.");
            this.form.reset({
                profession: "",
                interest: "educacao",
                name: "",
                phone: "",
                email: "",
                city: "",
                consent: false,
            });
            this.step.set(1);
        } catch (e) {
            this.hasError.set(true);
            this.message.set(
                e instanceof Error
                    ? e.message
                    : "Não foi possível enviar seu cadastro.",
            );
        } finally {
            this.loading.set(false);
        }
    }
}
