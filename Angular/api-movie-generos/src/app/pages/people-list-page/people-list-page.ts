import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/people-list.interface';
import { PeopleService } from '../../services/people-service';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-people-list-page',
  imports: [DecimalPipe],
  templateUrl: './people-list-page.html',
  styleUrl: './people-list-page.css',
})
export class PeopleListPage implements OnInit {


peopleList : Person [] = []

constructor(private servicePeople : PeopleService, private router: Router){}


  ngOnInit(): void {
    this.getPeople();
  }

getPeople(): void{
    this.servicePeople.getPeople().subscribe(resp =>{
      this.peopleList = resp.results;
    })
  }

  goToDetails(personId: number): void {
    this.router.navigate(['/personajes', personId]);
  }

}
