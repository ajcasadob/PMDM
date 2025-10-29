import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarWarsPeopleList } from './star-wars-people-list/star-wars-people-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StarWarsPeopleList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('starwars');
}
