import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar-component-page',
  imports: [],
  templateUrl: './custom-progress-bar-component-page.html',
  styleUrl: './custom-progress-bar-component-page.css',
})
export class CustomProgressBarComponentPage {


  @Input() value: number = 0;
  @Input() color: string = 'bg-primary';
  @Input() striped: boolean = false;
  @Input() animated: boolean = false;
  @Input() showLabel: boolean = false;

}
