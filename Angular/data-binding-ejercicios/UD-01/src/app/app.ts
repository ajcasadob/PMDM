import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mensaje } from './mensaje/mensaje';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Mensaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UD-01');
}
