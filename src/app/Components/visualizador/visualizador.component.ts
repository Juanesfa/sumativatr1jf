// src/app/Components/visualizador/visualizador.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [CommonModule],
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
}