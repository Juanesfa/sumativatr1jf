import { Component, ViewChild } from '@angular/core';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from '../Botones/btn-cancelar/btn-cancelar.component';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component'; 
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component'; 
import { BtnModoNocheComponent } from '../Botones/btn-modo-noche/btn-modo-noche.component'; // Importar el nuevo botón
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    BtnAceptarComponent,
    BtnCancelarComponent,
    BtnPrimarioComponent,
    BtnSecundarioComponent,
    BtnModoNocheComponent,
    EmailComponent,
    PasswordComponent,
    TextComponent,
    VisualizadorComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  email: string = '';
  password: string = '';
  text: string = '';
  mostrarDatos: boolean = false;
  emailError: string = ''; // Almacena el mensaje de error del email
  passwordError: string = ''; 

  datosParaVisualizar = {
    email: '',
    password: '',
    text: ''
  };

  color: string = 'green'; 

  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent;

  onAceptar() {
    this.datosParaVisualizar = {
      email: this.email,
      password: this.password,
      text: this.text
    };
    this.mostrarDatos = true;
  }

  onCancelar() {
    this.email = '';
    this.password = '';
    this.text = '';
    this.mostrarDatos = false;
  }

  cambiarTamano() {
    if (this.visualizador) {
      this.visualizador.cambiarTamano();
    }
  }

  cambiarColor(newColor: string) {
    this.color = newColor;
  }

  // Manejar errores del EmailComponent
  handleEmailError(errorMessage: string) {
    this.emailError = errorMessage; // Actualizar el mensaje de error
  }

  // Manejar errores del PasswordComponent
  handlePasswordError(errorMessage: string) {
    this.passwordError = errorMessage; // Actualizar el mensaje de error
  }
}