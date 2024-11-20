import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  standalone: true,
  template: `
    <button (click)="onCancelar()">Cancelar</button>
  `,
  styleUrls: ['./btn-cancelar.component.css']
})
export class BtnCancelarComponent {
  @Output() cancelar = new EventEmitter<void>();

  onCancelar() {
    this.cancelar.emit();
  }
}