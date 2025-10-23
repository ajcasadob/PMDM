import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tablet } from './tablet/tablet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Tablet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tablet-componet');
}
