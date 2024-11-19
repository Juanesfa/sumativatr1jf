import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContenedorComponent } from './Components/contenedor/contenedor.component'; // Importar ContenedorComponent
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContenedorComponent,
    FormsModule // Agregar FormsModule aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}