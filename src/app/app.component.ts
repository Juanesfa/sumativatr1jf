import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContenedorComponent } from './Components/contenedor/contenedor.component'; // Importar ContenedorComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContenedorComponent], // Agregar ContenedorComponent a las importaciones
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}