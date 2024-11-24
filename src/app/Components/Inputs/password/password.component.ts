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
  }

  get password(): string {
    return this._password;
  }

  @Output() passwordChange = new EventEmitter<string>();
  @Output() errorOccurred = new EventEmitter<string>(); // Evento para manejar errores

  validatePassword() {
    if (this._password.length < 6) {
      this.errorOccurred.emit('La contraseña debe tener al menos 6 caracteres e incluir letras y números');
    } else {
      this.errorOccurred.emit('¡Correcto!'); // Emitir vacío si no hay error
    }
  }
}