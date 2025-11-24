import { Component, OnInit } from '@angular/core';
import { Movie, MoviePopularResponse } from '../../interfaces/movie-popular-list.interface';
import { MoviePopularListService } from '../../services/movie-popular-list-service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from '../../interfaces/movie-list-details.interface';

@Component({
  selector: 'app-movie-details-page',
  imports: [],
  templateUrl: './movie-details-page.html',
  styleUrl: './movie-details-page.css',
})
export class MovieDetailsPage implements OnInit {


  movie!:MovieDetailsResponse
  productId = Number
  constructor(private serviceMovie: MoviePopularListService, private route:ActivatedRoute){}

  ngOnInit(): void {
    
    const id =Number(this.route.snapshot.paramMap.get('id'))
    if(id){
      this.serviceMovie.getMovie(id)
    }
    
  }

  getMovie(id:number){

   this.route.params.subscribe((params)=>{
    this.productId.parseInt(params['id']);
   });
    

  }

}
