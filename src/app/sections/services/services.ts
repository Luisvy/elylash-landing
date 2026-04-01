import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = signal([
    {
      name: 'Clásicas',
      price: 30,
      description: 'Densidad elegante con acabado difuminado y ligero para elevar la mirada.',
      tag: 'Mas pedido',
      img:'/assets/clasicas.png',
      offer: 'Para todos los gustos'
    },
    {
      name: 'Volumen 2D y 3D',
      price: 35,
      description: 'Definicion limpia y natural para un look pulido de todos los dias.',
      tag: 'Natural llamativo',
      img: '/assets/3d.png',
      offer: 'Realza la mirada'
    },
    {
      name: '4D y 5D',
      price: 45,
      description: 'Textura moderna con picos estrategicos para un efecto sofisticado',
      tag: 'Tendencia',
      img: 'assets/5d.png',
      offer: 'Siéntete divina',
    }
  ]);
}
