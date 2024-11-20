import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule aquí
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() password: string = '';
  @Input() email: string = '';
  @Input() text: string = '';
  @Input() color: string = 'green'; // Agregar propiedad de entrada para el color
}