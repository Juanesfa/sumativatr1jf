import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para ngModel
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  private _text: string = '';
  
  @Input()
  set text(value: string) {
    this._text = value;
    this.textChange.emit(this._text); // Emitir el cambio
  }
  
  get text(): string {
    return this._text;
  }

  @Output() textChange = new EventEmitter<string>(); // Emitir cambios
}