import { Component } from '@angular/core';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component'; // Importar BtnPrimarioComponent
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component'; // Importar BtnSecundarioComponent

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [BtnPrimarioComponent, BtnSecundarioComponent], // Agregar ambos botones a las importaciones
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  color: string = 'blue'; // Color inicial del cuadro
  tamano: number = 100; // Tamaño inicial del cuadro

  cambiarColor() {
    const colores = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    this.color = colores[Math.floor(Math.random() * colores.length)];
  }

  cambiarTamano() {
    this.tamano = this.tamano === 100 ? 200 : 100; // Alternar entre 100px y 200px
  }
}