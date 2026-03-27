import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  reviews = signal([
    {
      name: 'Laura',
      role: 'Clásicas',
      text: 'El resultado se ve fino, nada pesado, y la experiencia fue super cuidada de principio a fin.',
    },
    {
      name: 'Nancy',
      role: 'Diseño personalizado Cat',
      text: 'Por fin encontre un set seductor que se nota bonito incluso sin maquillaje.',
    },
    {
      name: 'Claudia',
      role: 'Volumen 5D',
      text: 'Todo esta pensado para que salgas guapisima.',
    }
  ]);
}
