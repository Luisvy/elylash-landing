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
    },
    {
      name: 'Volumen 2D y 3D',
      price: 40,
      description: 'Definicion limpia y natural para un look pulido de todos los dias.',
      tag: 'Natural llamativo',
    },
    {
      name: '4D y 5D',
      price: 45,
      description: 'Textura moderna con picos estrategicos para un efecto sofisticado',
      tag: 'Tendencia',
    }
  ]);
}
