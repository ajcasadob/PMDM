import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentNewPage } from "./student-new-page/student-new-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentNewPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular-formulario-aj');
}
