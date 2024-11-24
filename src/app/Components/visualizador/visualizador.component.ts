import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('checkmarkAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0)' }))
      ])
    ])
  ],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() password: string = '';
  @Input() email: string = '';
  @Input() text: string = '';
  @Input() color: string = 'green';

  size: number = 100; // Tamaño inicial en píxeles
  incrementCount: number = 0; // Contador de incrementos
  maxIncrements: number = 4; // Máximo de incrementos permitidos
  incrementValue: number = 25; // Valor de incremento por cada clic
  mostrarCheck: boolean = false; // Controlar la visibilidad del checkmark
  mostrarX: boolean = false; // Controlar la visibilidad del checkmark

  cambiarTamano() {
    if (this.incrementCount < this.maxIncrements) {
      this.size += this.incrementValue; // Incrementar el tamaño
      this.incrementCount++; // Aumentar el contador
    }

    // Restablecer el tamaño después de alcanzar el máximo
    if (this.incrementCount === this.maxIncrements) {
      setTimeout(() => {
        this.size = 100; // Restablecer a 100 píxeles
        this.incrementCount = 0; // Reiniciar el contador
      }, 1000); // 1 segundo
    }
  }

  mostrarCheckmark() {
    this.mostrarCheck = true; // Mostrar el checkmark
    setTimeout(() => {
      this.mostrarCheck = false; // Ocultar después de un tiempo
    }, 2000); // Mantener visible por 2 segundo
  }

  mostrarXmark() {
    this.mostrarX = true; // Mostrar el checkmark
    setTimeout(() => {
      this.mostrarX = false; // Ocultar después de un tiempo
    }, 2000); // Mantener visible por 2 segundo
  }
}