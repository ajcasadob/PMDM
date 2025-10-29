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
  { name: 'Luke Skywalker', type: 'Jedi' },
  { name: 'Darth Vader', type: 'Sith' },
  { name: 'Han Solo', type: 'Smuggler' },
  { name: 'Leia Organa', type: 'Rebel' }
];


}
