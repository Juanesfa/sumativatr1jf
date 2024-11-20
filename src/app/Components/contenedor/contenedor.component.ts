// src/app/Components/contenedor/contenedor.component.ts
import { Component, ViewChild } from '@angular/core';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from '../Botones/btn-cancelar/btn-cancelar.component';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component'; 
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component'; // Importar el nuevo botón
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    BtnAceptarComponent,
    BtnCancelarComponent,
    BtnPrimarioComponent,
    BtnSecundarioComponent, // Agregar aquí
    EmailComponent,
    PasswordComponent,
    TextComponent,
    VisualizadorComponent,
    FormsModule,
    CommonModule // Agregar CommonModule aquí
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  email: string = '';
  password: string = '';
  text: string = '';
  mostrarDatos: boolean = false;

  datosParaVisualizar = {
    email: '',
    password: '',
    text: ''
  };

  color: string = 'green'; // Color inicial

  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al VisualizadorComponent

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
      this.visualizador.cambiarTamano(); // Llamar al método cambiarTamano del VisualizadorComponent
    }
  }

  cambiarColor(newColor: string) {
    this.color = newColor; // Cambiar el color
  }
}