import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule], // Agregar FormsModule aquí
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
}