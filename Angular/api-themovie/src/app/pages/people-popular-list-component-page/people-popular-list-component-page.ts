import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PeoplePopularListService } from '../../services/people-popular-list-service';
import { Person } from '../../interfaces/people-popular-list.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people-popular-list-component-page',
  imports: [RouterLink],
  templateUrl: './people-popular-list-component-page.html',
  styleUrl: './people-popular-list-component-page.css',
})
export class PeoplePopularListComponentPage implements OnInit {


  peopleList:Person[] = [];
  constructor(private service: PeoplePopularListService ) { }


  ngOnInit(): void {

    this.service.getList().subscribe((resp) => {

      this.peopleList = resp.results.slice(0, 4);
    });
    
  }

}
