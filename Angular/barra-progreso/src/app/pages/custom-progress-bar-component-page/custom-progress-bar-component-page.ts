import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-progress-bar-component-page',
  imports: [FormsModule],
  templateUrl: './custom-progress-bar-component-page.html',
  styleUrl: './custom-progress-bar-component-page.css',
})
export class CustomProgressBarComponentPage {

  progreso: number = 50;
  colorSeleccionado: string = 'bg-primary';
  striped: boolean = true;
  animated: boolean = true;
  showLabel: boolean = true;

  colores = [
    { valor: 'bg-primary', nombre: 'Azul' },
    { valor: 'bg-success', nombre: 'Verde' },
    { valor: 'bg-danger', nombre: 'Rojo' },
    { valor: 'bg-warning', nombre: 'Amarillo' },
    { valor: 'bg-info', nombre: 'Cyan' },
    { valor: 'bg-secondary', nombre: 'Gris' }
  ];

  aumentar(): void {
    if (this.progreso < 100) {
      this.progreso += 10;
    }
  }

  disminuir(): void {
    if (this.progreso > 0) {
      this.progreso -= 10;
    }
  }

}
