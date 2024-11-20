import { Component } from '@angular/core';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from '../Botones/btn-cancelar/btn-cancelar.component';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component'; 
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    BtnAceptarComponent,
    BtnCancelarComponent,
    BtnPrimarioComponent,
    EmailComponent,
    PasswordComponent,
    TextComponent,
    VisualizadorComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  email: string = '';
  password: string = '';
  text: string = '';
  mostrarDatos: boolean = false;
  colorCuadrado: string = '#FFFFFF'; // Color por defecto del cuadrado

  datosParaVisualizar = {
    email: '',
    password: '',
    text: ''
  };

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

  cambiarColor(nuevoColor: string) {
    this.colorCuadrado = nuevoColor; // Actualiza el color del cuadrado
  }
}