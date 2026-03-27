import { Routes } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { Gallery } from './sections/gallery/gallery';
import { Services } from './sections/services/services';
import { Booking } from './sections/booking/booking';
import { Reviews } from './sections/reviews/reviews';

export const routes: Routes = [
  { path: '', component: Hero, title: 'Ely Lash Room' },
  { path: 'gallery', component: Gallery, title: 'Mis trabajos | Ely Lash Room' },
  { path: 'services', component: Services, title: 'Servicios | Ely Lash Room' },
  { path: 'booking', component: Booking, title: 'Reserva | Ely Lash Room' },
  { path: 'reviews', component: Reviews, title: 'Opiniones | Ely Lash Room' },
  { path: '**', redirectTo: '' }
];
