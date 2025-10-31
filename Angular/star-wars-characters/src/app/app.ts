import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleListComponent } from "./components/people-list/people-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PeopleListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('star-wars-characters');
}
