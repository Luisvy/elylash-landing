import { Component, DestroyRef, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly menuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly navItems = [
    { label: 'Home', path: '/' },
    { label: 'Trabajos', path: '/gallery' },
    { label: 'Servicios', path: '/services' },
    { label: 'Reserva tu cita', path: '/booking' },
    { label: 'Reseñas', path: '/reviews' }
  ];

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const updateScrollState = () => {
      this.isScrolled.set(window.scrollY > 20);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', updateScrollState));
  }

  protected toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu() {
    this.menuOpen.set(false);
  }
}
