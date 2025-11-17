import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiclesListPage } from "./vehicles-list-page/vehicles-list-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular-api-aj');
}
