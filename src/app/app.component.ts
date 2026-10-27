import { Component, signal } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { environment } from "../environments/environment";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="navbar">
      <div class="wrap nav-inner">
        <a routerLink="/" class="logo" aria-label="Sexta Marcha - início"
          ><img src="images/logo-sexta-marcha.png" alt="6ª Marcha" /></a
        ><button
          class="hamburger"
          type="button"
          (click)="menuOpen.set(!menuOpen())"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="nav-menu"
          [attr.aria-label]="menuOpen() ? 'Fechar menu' : 'Abrir menu'"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav
        id="nav-menu"
        class="nav-dropdown"
        [class.open]="menuOpen()"
        aria-label="Menu principal"
      >
        <a routerLink="/" fragment="sobre" (click)="menuOpen.set(false)"
          >Sobre</a
        ><a routerLink="/" fragment="solucoes" (click)="menuOpen.set(false)"
          >Soluções</a
        ><a routerLink="/" fragment="cadastro" (click)="menuOpen.set(false)"
          >Cadastro</a
        ><a routerLink="/" fragment="contato" (click)="menuOpen.set(false)"
          >Contato</a
        >
      </nav>
    </header>
    <router-outlet></router-outlet>
    <footer id="contato" class="footer">
      <div class="wrap footer-grid">
        <div>
          <img src="/images/logo-sexta-marcha.png" alt="6ª Marcha" />
          <p>Um hub de soluções para profissionais automotivos.</p>
        </div>
        <div>
          <strong>LINKS RÁPIDOS</strong
          ><a routerLink="/" fragment="sobre">Sobre</a
          ><a routerLink="/" fragment="solucoes">Soluções</a
          ><a routerLink="/" fragment="cadastro">Cadastre seu interesse</a>
        </div>
        <div>
          <strong>CONTATO</strong>
          @if (email) {
            <a [href]="'mailto:' + email">{{ email }}</a>
          }
          @if (whatsapp) {
            <a
              [href]="'https://wa.me/' + whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              >WhatsApp ↗</a
            >
          }
          @if (!email && !whatsapp) {
            <p>Canais de contato em configuração.</p>
          }
        </div>
      </div>
      <div class="wrap footer-bottom">
        © {{ year }} Sexta Marcha · Acelere seus negócios.
      </div>
    </footer>
  `,
})
export class AppComponent {
  menuOpen = signal(false);
  year = new Date().getFullYear();
  email = environment.contactEmail;
  whatsapp = environment.contactWhatsApp;
}
