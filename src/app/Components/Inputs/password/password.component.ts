import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para ngModel
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  private _password: string = '';
  
  @Input()
  set password(value: string) {
    this._password = value;
    this.passwordChange.emit(this._password); // Emitir el cambio
  }
  
  get password(): string {
    return this._password;
  }

  @Output() passwordChange = new EventEmitter<string>(); // Emitir cambios
}