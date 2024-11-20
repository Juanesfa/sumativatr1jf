import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule], // Agregar FormsModule aquí
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
}