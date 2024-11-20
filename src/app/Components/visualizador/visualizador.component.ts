import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() password: string = '';
  @Input() email: string = '';
  @Input() text: string = '';
  @Input() colorCuadrado: string = '#5A7EE8'; // Asegúrate de que esta línea esté presente
}