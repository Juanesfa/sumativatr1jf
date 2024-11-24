// src/app/Components/contenedor/contenedor.component.ts
  import { Output, EventEmitter } from '@angular/core';
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
      BtnModoNocheComponent, // Agregar aquí
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
    @Output() emailChange = new EventEmitter<string>();
    @Output() passwordChange = new EventEmitter<string>();
    @Output() textChange = new EventEmitter<string>();
    
    email: string = '';
    password: string = '';
    text: string = '';
    mostrarDatos: boolean = false;
    emailErrorMessage: string = ''; // Mensaje de error para el email
  passwordErrorMessage: string = ''; // Mensaje de error para la contraseña

    datosParaVisualizar = {
      email: '',
      password: '',
      text: ''
    };
 // Método para manejar errores del EmailComponent
 onEmailError(error: string) {
  this.emailErrorMessage = error; // Actualizar el mensaje de error
}

// Método para manejar errores del PasswordComponent
onPasswordError(error: string) {
  this.passwordErrorMessage = error; // Actualizar el mensaje de error
}
  color: string = 'green'; // Color inicial

  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al VisualizadorComponent

  onAceptar() {
    this.datosParaVisualizar = {
      email: this.email,
      password: this.password,
      text: this.text
    };
    this.mostrarDatos = true;
    this.visualizador.mostrarX = false; // Ocultar el X
    this.cambiarColor('green');
    this.visualizador.mostrarCheckmark(); // Mostrar el checkmark
    
  }
  
  onCancelar() {
      this.email = '';
      this.password = '';
      this.text = '';
      this.mostrarDatos = false;
    
      // Restablecer los mensajes de error
      this.emailErrorMessage = ''; // Asegúrate de que esta variable esté definida en tu componente
      this.passwordErrorMessage = ''; // Asegúrate de que esta variable esté definida en tu componente
    
    
    this.visualizador.mostrarCheck = false; // Ocultar el checkmark
    this.cambiarColor('red');
    this.visualizador.mostrarXmark(); // Mostrar el X
  }
  
  cambiarTamano() {
    if (this.visualizador) {
      this.visualizador.cambiarTamano(); // Llamar al método cambiarTamano del VisualizadorComponent
      this.visualizador.mostrarX = false; // Ocultar el X
      this.visualizador.mostrarCheck = false; // Ocultar el checkmark
    }
  }
  
  cambiarColor(newColor: string) {
    this.color = newColor; // Cambiar el color
    this.visualizador.mostrarX = false; // Ocultar el X
    this.visualizador.mostrarCheck = false; // Ocultar el checkmark
  }
}