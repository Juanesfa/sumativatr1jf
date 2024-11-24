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
  }

  get email(): string {
    return this._email;
  }

  @Output() emailChange = new EventEmitter<string>();
  @Output() errorOccurred = new EventEmitter<string>(); // Evento para manejar errores

  validateEmail() {
    if (!this._email.includes('@')) {
      this.errorOccurred.emit('El email debe contener un @');
    } else {
      this.errorOccurred.emit('¡Correcto!'); // Emitir vacío si no hay error
    }
  }
}