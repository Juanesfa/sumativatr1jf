import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  private _password: string = '';

  @Input()
  set password(value: string) {
    this._password = value;
    this.passwordChange.emit(this._password);
    this.validatePassword(this._password); // Validar cada vez que se establece la contraseña
  }

  get password(): string {
    return this._password;
  }

  @Output() passwordChange = new EventEmitter<string>();
  @Output() errorOccurred = new EventEmitter<string>(); // Emitir error como string

  validatePassword(password: string) {
    const hasLetter = /[a-zA-Z]/.test(password); // Verificar si hay letras
    const hasNumber = /\d/.test(password); // Verificar si hay números
    const isValid = hasLetter && hasNumber && password.length >= 6; // Validar longitud mínima y que contenga letras y números

    if (!isValid) {
      this.errorOccurred.emit('La contraseña debe tener al menos 6 caracteres y contener letras y números.');
    } else {
      this.errorOccurred.emit('Correcto!'); // Emitir vacío si es válido
    }
  }
}