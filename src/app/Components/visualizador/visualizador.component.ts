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

  cambiarTamano() {
    // Generar un tamaño aleatorio entre 100 y 400 píxeles
    const newSize = Math.floor(Math.random() * 301) + 100; // De 100 a 400
    this.size = newSize;

    // Restablecer el tamaño después de un breve período
    setTimeout(() => {
      this.size = 100; // Restablecer a 100 píxeles
    }, 1000); // 1 segundo
  }
}