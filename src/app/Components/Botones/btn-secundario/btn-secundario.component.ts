// src/app/Components/Botones/btn-secundario/btn-secundario.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  template: `
    <button (click)="onClick()">Secundario</button>
  `,
  styleUrls: ['./btn-secundario.component.css']
})
export class BtnSecundarioComponent {
  @Output() cambiarTamano = new EventEmitter<void>();

  onClick() {
    this.cambiarTamano.emit(); // Emitir evento al hacer clic
  }
}