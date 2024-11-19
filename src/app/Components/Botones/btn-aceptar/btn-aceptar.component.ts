import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  template: `
    <button (click)="onAceptar()">Aceptar</button>
  `,
  styleUrls: ['./btn-aceptar.component.css']
})
export class BtnAceptarComponent {
  @Output() aceptar = new EventEmitter<void>(); // Evento que se emitirá al hacer clic

  onAceptar() {
    this.aceptar.emit(); // Emitir el evento
  }
}