import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeadService } from '../core/lead.service';
@Component({
    selector: 'app-lead-form', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
<div class="form-shell"><div class="form-meter"><span>CADASTRO DE INTERESSE</span><span>ETAPA 0{{step()}} / 03</span></div><div class="meter-track"><div [style.width.%]="progress()"></div></div>
<div class="form-head"><span class="eyebrow">ACELERE SUA JORNADA</span><h3>{{step()===1?'QUAL É SUA PISTA?':step()===2?'QUEM ESTÁ NO VOLANTE?':'PRONTO PARA ACELERAR?'}}</h3><p>Preencha seus dados para conhecer as próximas oportunidades.</p></div>
<form [formGroup]="form" (ngSubmit)="next()" novalidate>
<div class="step-panel" [class.accelerating]="accelerating()" [attr.data-step]="step()">
@if(step()===1){<label for="profession">ÁREA DE ATUAÇÃO *</label><select id="profession" formControlName="profession"><option value="">Selecione seu perfil</option><option value="despachante">Despachante</option><option value="vistoriador">Vistoriador</option><option value="lojista">Lojista</option><option value="outros">Outro profissional automotivo</option></select><label for="interest">PRINCIPAL INTERESSE *</label><select id="interest" formControlName="interest"><option value="educacao">Educação de trânsito</option><option value="vistoria">Vistorias digitais (planejado)</option><option value="documentos">Serviços documentais (planejado)</option><option value="lojistas">Soluções para lojistas (planejado)</option></select>}
@if(step()===2){<label for="name">NOME COMPLETO *</label><input id="name" formControlName="name" autocomplete="name" placeholder="Seu nome"><label for="phone">WHATSAPP COM DDD *</label><input id="phone" formControlName="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(11) 99999-9999"><label for="email">E-MAIL *</label><input id="email" formControlName="email" type="email" autocomplete="email" placeholder="voce@empresa.com.br"><label for="city">CIDADE / UF</label><input id="city" formControlName="city" placeholder="Belém / PA">}
@if(step()===3){<div class="review"><p><strong>PROFISSÃO</strong> {{professionLabel()}}</p><p><strong>NOME</strong> {{form.controls.name.value}}</p><p><strong>WHATSAPP</strong> {{form.controls.phone.value}}</p><p><strong>INTERESSE</strong> {{form.controls.interest.value}}</p></div><label class="consent"><input type="checkbox" formControlName="consent"><span>Autorizo o contato da Sexta Marcha sobre soluções e oportunidades. Consulte as informações de privacidade antes de enviar. *</span></label>}
</div>
@if(message()){<p class="form-feedback" [class.error]="hasError()" role="status">{{message()}}</p>}
<div class="form-actions">@if(step()>1){<button type="button" class="back" (click)="previous()">← VOLTAR</button>}<button type="submit" class="button-primary" [disabled]="loading() || accelerating()">{{loading()?'ENVIANDO...':step()===3?'ENVIAR INTERESSE':'PRÓXIMA MARCHA'}} <span>→</span></button></div>
</form><p class="form-note">O envio só funciona após configurar o Firebase e a proteção App Check. Nenhum dado é armazenado no modo inicial.</p></div>
`})
export class LeadFormComponent {
    private fb = inject(FormBuilder); private leadService = inject(LeadService);
    step = signal(1); accelerating = signal(false); loading = signal(false); message = signal(''); hasError = signal(false);
    progress = computed(() => this.step() / 3 * 100);
    form = this.fb.nonNullable.group({ profession: ['', Validators.required], interest: ['educacao', Validators.required], name: ['', [Validators.required, Validators.minLength(3)]], phone: ['', [Validators.required, Validators.pattern(/^[+()\d\s-]{10,20}$/)]], email: ['', [Validators.required, Validators.email]], city: [''], consent: [false, Validators.requiredTrue] });
    professionLabel() { return ({ despachante: 'Despachante', vistoriador: 'Vistoriador', lojista: 'Lojista', outros: 'Outro profissional' } as Record<string, string>)[this.form.controls.profession.value] || ''; }
    previous() { this.message.set(''); this.step.update(v => Math.max(1, v - 1)); }
    async next() {
        this.message.set(''); this.hasError.set(false);
        const fields = this.step() === 1 ? ['profession', 'interest'] : this.step() === 2 ? ['name', 'phone', 'email'] : ['consent'];
        for (const key of fields) { const control = this.form.get(key); control?.markAsTouched(); if (control?.invalid) { this.hasError.set(true); this.message.set('Confira os campos obrigatórios antes de continuar.'); return; } }
        if (this.step() < 3) { this.accelerating.set(true); await new Promise<void>(resolve => setTimeout(resolve, 330)); this.step.update(v => v + 1); this.accelerating.set(false); return; }
        this.loading.set(true);
        try { await this.leadService.submit(this.form.getRawValue()); this.message.set('Cadastro recebido! Em breve entraremos em contato.'); this.form.reset({ profession: '', interest: 'educacao', name: '', phone: '', email: '', city: '', consent: false }); this.step.set(1); }
        catch (e) { this.hasError.set(true); this.message.set(e instanceof Error ? e.message : 'Não foi possível enviar seu cadastro.'); }
        finally { this.loading.set(false); }
    }
}
