import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  private _email: string = '';
  @Output() emailChange = new EventEmitter<string>();
  @Output() errorOccurred = new EventEmitter<string>(); // Evento para errores

  @Input()
  set email(value: string) {
    if (this.validateEmail(value)) {
      this._email = value;
      this.errorOccurred.emit(''); // Emitir vacío si no hay error
      this.emailChange.emit(this._email);
    } else {
      this.errorOccurred.emit('El correo electrónico debe incluir "@" y tener un formato válido.'); // Emitir error
    }
  }

  get email(): string {
    return this._email;
  }

  private validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar el formato de correo
    return emailPattern.test(email);
  }
}