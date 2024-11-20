import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule], // Agregar FormsModule aquí
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  private _text: string = '';

  @Input()
  set text(value: string) {
    this._text = value;
    this.textChange.emit(this._text);
  }

  get text(): string {
    return this._text;
  }

  @Output() textChange = new EventEmitter<string>();
}