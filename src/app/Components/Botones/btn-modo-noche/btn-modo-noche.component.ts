import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-modo-noche',
  standalone: true,
  templateUrl: './btn-modo-noche.component.html',
  styleUrls: ['./btn-modo-noche.component.css']
})
export class BtnModoNocheComponent {
  isDarkMode: boolean = false; // Estado del modo oscuro

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}