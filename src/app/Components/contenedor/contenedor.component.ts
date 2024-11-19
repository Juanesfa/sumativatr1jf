import { Component } from '@angular/core';
import { PasswordComponent } from '../Inputs/password/password.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { TextComponent } from '../Inputs/text/text.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component'; // Importar BtnAceptarComponent
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    PasswordComponent,
    EmailComponent,
    TextComponent,
    VisualizadorComponent,
    BtnAceptarComponent,
    FormsModule // Importar FormsModule para ngModel
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  password: string = '';
  email: string = '';
  text: string = '';
  mostrarDatos: boolean = false; // Variable para controlar la visualización de datos

  // Método para manejar el clic en el botón Aceptar
  onAceptar() {
    this.mostrarDatos = true; // Cambia el estado para mostrar los datos
  }
}