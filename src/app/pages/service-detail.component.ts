import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { services } from '../data/services';
@Component({standalone:true,imports:[RouterLink],template:`
<main class="detail-page"><div class="wrap">@if(item){<a routerLink="/" fragment="solucoes" class="back-link">← VOLTAR AO PORTFÓLIO</a><div class="eyebrow">SOLUÇÃO {{item.number}} / {{item.status==='initial'?'PRIMEIRA FRENTE':'EM PLANEJAMENTO'}}</div><h1>{{item.title}}<span>.</span></h1><p class="detail-tagline">{{item.tagline}}</p><p class="detail-description">{{item.description}}</p><div class="detail-audience"><strong>PARA QUEM</strong>@for(a of item.audience;track a){<span>{{a}}</span>}</div><div class="detail-media"><div><h2>VEJA EM AÇÃO</h2>@if(video){<iframe [src]="video" title="Demonstração da solução" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>}@else{<div class="media-placeholder">VÍDEO DE DEMONSTRAÇÃO<br><small>Aguardando material oficial da solução</small></div>}</div><div><h2>TELAS DA SOLUÇÃO</h2>@if(item.screenshots.length){<div class="screenshots">@for(src of item.screenshots;track src){<img [src]="src" alt="Captura de tela da solução" loading="lazy">}</div>}@else{<div class="media-placeholder">PRINTS DO SISTEMA<br><small>Adicione imagens aprovadas no catálogo</small></div>}</div></div><a routerLink="/" fragment="cadastro" class="button-primary">CADASTRAR INTERESSE <span>↗</span></a>}@else{<h1>SOLUÇÃO NÃO ENCONTRADA</h1><a routerLink="/">Voltar ao início</a>}</div></main>
`})
export class ServiceDetailComponent {
 private route=inject(ActivatedRoute);private sanitizer=inject(DomSanitizer);
 item=services.find(s=>s.slug===this.route.snapshot.paramMap.get('slug'));
 // Video links must be approved embed URLs, never accept arbitrary user-provided URLs.
 video:SafeResourceUrl|null=this.item?.videoUrl?this.sanitizer.bypassSecurityTrustResourceUrl(this.item.videoUrl):null;
}
