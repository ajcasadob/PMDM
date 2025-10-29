import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star-wars-person',
  imports: [],
  templateUrl: './star-wars-person.html',
  styleUrl: './star-wars-person.css',
})
export class StarWarsPerson {


  nombreStarWars = input('');
  tipoStarWarss = input('');

}
