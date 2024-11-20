import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  templateUrl: './btn-primario.component.html',
  styleUrls: ['./btn-primario.component.css']
})
export class BtnPrimarioComponent {
  @Output() cambiarColor = new EventEmitter<string>();

  onClick() {
    const nuevoColor = this.generarColorAleatorio(); // Generar un color aleatorio
    this.cambiarColor.emit(nuevoColor); // Emitir el nuevo color
  }

  private generarColorAleatorio(): string {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}