import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-modo-noche',
  standalone: true,
  templateUrl: './btn-modo-noche.component.html',
  styleUrls: ['./btn-modo-noche.component.css']
})
export class BtnModoNocheComponent {
  // Método para cambiar el fondo a negro
  cambiarFondo() {
    document.body.style.backgroundColor = 'black'; // Cambiar el color de fondo
    document.body.style.color = 'white'; // Cambiar el color del texto a blanco para mayor contraste
  }
}