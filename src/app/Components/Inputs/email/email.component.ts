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

  @Input()
  set email(value: string) {
    this._email = value;
    this.emailChange.emit(this._email);
    this.validateEmail(this._email); // Validar cada vez que se establece el email
  }

  get email(): string {
    return this._email;
  }

  @Output() emailChange = new EventEmitter<string>();
  @Output() errorOccurred = new EventEmitter<string>(); // Emitir error como string

  validateEmail(email: string) {
    const isValid = email.includes('@') && email.endsWith('.com');
    if (!isValid) {
      this.errorOccurred.emit('Email inválido. Debe contener "@" y terminar en ".com".');
    } else {
      this.errorOccurred.emit(''); // Emitir vacío si es válido
    }
  }
}