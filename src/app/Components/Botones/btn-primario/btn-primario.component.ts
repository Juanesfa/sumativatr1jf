import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  imports: [],
  templateUrl: './btn-primario.component.html',
  styleUrls: ['./btn-primario.component.css']
})
export class BtnPrimarioComponent {
  @Output() cambiarColor = new EventEmitter<void>();

  onClick() {
    this.cambiarColor.emit(); // Emitir evento al hacer clic
  }
}