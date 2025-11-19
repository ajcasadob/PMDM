import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListGenresPage } from "./pages/movie-list-genres-page/movie-list-genres-page";

@Component({
  selector: 'app-root',
  imports: [ MovieListGenresPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-movie-generos');
}
