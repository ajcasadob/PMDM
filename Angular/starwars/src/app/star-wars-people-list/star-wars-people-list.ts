import { Component } from '@angular/core';
import { StarWarsPerson } from '../star-wars-person/star-wars-person';

@Component({
  selector: 'app-star-wars-people-list',
  imports: [StarWarsPerson],
  templateUrl: './star-wars-people-list.html',
  styleUrl: './star-wars-people-list.css',
})
export class StarWarsPeopleList {

starWars = [
    { name: 'Bulbasaur', type: 'Grass/Poison' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' },
    { name: 'Pikachu', type: 'Electric' },
  ];

}
