import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  standalone: true, // Hacer que el componente sea standalone
  template: `
    <button (click)="onAceptar()">Aceptar</button>
  `,
  styleUrls: ['./btn-aceptar.component.css']
})
export class BtnAceptarComponent {
  @Output() aceptar = new EventEmitter<void>();

  onAceptar() {
    this.aceptar.emit();
  }
}