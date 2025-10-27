import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculo } from './calculo/calculo';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Calculo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculadora');
}
