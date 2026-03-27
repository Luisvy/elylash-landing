import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements AfterViewInit {
  @ViewChild('track') private readonly track?: ElementRef<HTMLDivElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly slides = signal([
    { title: 'Antes', note: 'Antes de Full-set' ,image: '/assets/Trabajo1.jpeg'},
    { title: 'Después', note: 'Resultado Full-set', image: '/assets/Trabajo2.jpeg'},
    { title: 'Volumen High', note: 'Studio moment', image: '/assets/Resultado1.png'},
    { title: 'Efectos', note: 'Resultado', image: '/assets/Resultado2.jpeg'}
  ]);

  readonly activeIndex = signal(0);

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const intervalId = window.setInterval(() => {
      this.goToSlide(this.activeIndex() + 1);
    }, 3200);

    this.destroyRef.onDestroy(() => window.clearInterval(intervalId));
  }

  previous() {
    this.goToSlide(this.activeIndex() - 1);
  }

  next() {
    this.goToSlide(this.activeIndex() + 1);
  }

  goToSlide(index: number) {
    const slides = this.slides();
    if (!slides.length) {
      return;
    }

    const nextIndex = (index + slides.length) % slides.length;
    this.activeIndex.set(nextIndex);

    const track = this.track?.nativeElement;
    const cards = track?.querySelectorAll<HTMLElement>('.gallery__card');
    const card = cards?.[nextIndex];

    card?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });
  }
}
