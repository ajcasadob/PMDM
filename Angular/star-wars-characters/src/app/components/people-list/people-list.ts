import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../interfaces/people-list-response.interface';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.html',
  styleUrls: ['./people-list.css']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];
  loading = true;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe({
      next: (response) => {
        this.people = response.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los personajes', err);
        this.loading = false;
      }
    });
  }
}
