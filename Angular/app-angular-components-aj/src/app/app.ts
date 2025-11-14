import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListPage } from "./student-list-page/student-list-page";
import { StudentListComponent } from "./student-list-component/student-list-component";

@Component({
  selector: 'app-root',
  imports: [ StudentListPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular-components-aj');
}
