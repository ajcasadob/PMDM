import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/lista-peliculas-generos-interface';
import { PopularService } from '../../services/popular-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-details-movie-list-page',
  imports: [DecimalPipe,DatePipe,RouterLink,UpperCasePipe],
  templateUrl: './details-movie-list-page.html',
  styleUrl: './details-movie-list-page.css',
})
export class DetailsMovieListPage implements OnInit{


  details!:Movie

  constructor(private serviceDetails : PopularService, private route:ActivatedRoute){}


  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getDetails(id);
    }

  }
getDetails(id : number) : void{
    this.serviceDetails.getDetails(id).subscribe(resp =>{
      this.details = resp;
    })
  }

  }




