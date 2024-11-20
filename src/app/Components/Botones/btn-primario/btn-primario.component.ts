import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  template: `
    <button (click)="onClick()">Cambiar Color</button>
  `,
  styleUrls: ['./btn-primario.component.css']
})
export class BtnPrimarioComponent {
  @Output() cambiarColor = new EventEmitter<string>();

  onClick() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generar color aleatorio
    this.cambiarColor.emit(randomColor); // Emitir el nuevo color
  }
}