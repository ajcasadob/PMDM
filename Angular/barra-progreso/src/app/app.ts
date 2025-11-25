import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomProgressBarComponentPage } from "./pages/custom-progress-bar-component-page/custom-progress-bar-component-page";

@Component({
  selector: 'app-root',
  imports: [ CustomProgressBarComponentPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('barra-progreso');
}
