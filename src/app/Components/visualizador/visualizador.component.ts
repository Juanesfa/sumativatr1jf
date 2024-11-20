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
}