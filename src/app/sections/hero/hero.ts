import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly router = inject(Router);

    goToUrl() {
      window.open('https://wa.me/34655032626?text=Hola%20Ely%E2%9D%A4%EF%B8%8F,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20ponerme%20m%C3%A1s%20bella.%20', '_blank');
    }

   goToBooking() {
     void this.router.navigateByUrl('/booking');
   }

  goToGallery() {
    void this.router.navigateByUrl('/gallery');
  }
}
