import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  imports: [],
  templateUrl: './btn-secundario.component.html',
  styleUrls: ['./btn-secundario.component.css']
})
export class BtnSecundarioComponent {
  @Output() cambiarTamano = new EventEmitter<void>();

  onClick() {
    this.cambiarTamano.emit(); // Emitir evento al hacer clic
  }
}