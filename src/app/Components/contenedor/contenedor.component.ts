// src/app/Components/contenedor/contenedor.component.ts
import { Component } from '@angular/core';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from '../Botones/btn-cancelar/btn-cancelar.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    BtnAceptarComponent,
    BtnCancelarComponent,
    EmailComponent,
    PasswordComponent,
    TextComponent
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  email: string = '';
  password: string = '';
  text: string = '';
  mostrarDatos: boolean = false;

  onAceptar() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Text:', this.text);
    this.mostrarDatos = true;
  }

  onCancelar() {
    console.log('Botón Cancelar clicado');
  }
}