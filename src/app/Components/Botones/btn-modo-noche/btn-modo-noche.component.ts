// src/app/Components/Botones/btn-modo-noche/btn-modo-noche.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-modo-noche',
  standalone: true,
  templateUrl: './btn-modo-noche.component.html',
  styleUrls: ['./btn-modo-noche.component.css']
})
export class BtnModoNocheComponent {
  isNightMode: boolean = false; // Estado inicial

  cambiarFondo() {
    this.isNightMode = !this.isNightMode; // Cambiar el estado

    if (this.isNightMode) {
      document.body.style.backgroundColor = 'black'; // Cambiar el color de fondo a negro
      document.body.style.color = 'white'; // Cambiar el color del texto a blanco
    } else {
      document.body.style.backgroundColor = 'white'; // Cambiar el color de fondo a blanco
      document.body.style.color = 'black'; // Cambiar el color del texto a negro
    }
  }

  get icon() {
    return this.isNightMode ? '☀' : '🌙'; // Cambiar el ícono según el estado
  }
}