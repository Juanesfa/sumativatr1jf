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
  @Output() passwordChange = new EventEmitter<string>();
  @Output() errorOccurred = new EventEmitter<string>(); // Evento para errores

  @Input()
  set password(value: string) {
    if (this.validatePassword(value)) {
      this._password = value;
      this.errorOccurred.emit(''); // Emitir vacío si no hay error
      this.passwordChange.emit(this._password);
    } else {
      this.errorOccurred.emit('La contraseña debe tener al menos 8 caracteres e incluir letras y números.'); // Emitir error
    }
  }

  get password(): string {
    return this._password;
  }

  private validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Regex para validar la contraseña
    return passwordPattern.test(password);
  }
}