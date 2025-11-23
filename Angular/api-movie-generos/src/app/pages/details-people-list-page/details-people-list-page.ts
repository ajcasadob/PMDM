import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/people-list.interface';
import { PeopleService } from '../../services/people-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details-people-list-page',
  imports: [DecimalPipe,RouterLink],
  templateUrl: './details-people-list-page.html',
  styleUrl: './details-people-list-page.css',
})
export class DetailsPeopleListPage implements OnInit {


  people!:Person

  constructor(private detailsService: PeopleService, private route: ActivatedRoute){}

  ngOnInit(): void {
    
const id = Number(this.route.snapshot.paramMap.get('id'));
if(id){
  this.getPeopleDetails(id);
}

  }

  getPeopleDetails(id:number): void {
    this.detailsService.getDetailsPeople(id).subscribe(resp=>{
      this.people=resp;
    })
  }




}
