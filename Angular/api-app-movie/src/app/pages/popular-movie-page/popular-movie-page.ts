import { Component, OnInit } from '@angular/core';
import { MovieResult } from '../../interface/popular-interface';
import { PopularMovieService } from '../../service/popular-movie.service';

@Component({
  selector: 'app-popular-movie-page',
  imports: [],
  templateUrl: './popular-movie-page.html',
  styleUrl: './popular-movie-page.css',
})
export class PopularMoviePage implements OnInit {


  peliculas: MovieResult [] = [];

  constructor (private popularService : PopularMovieService){}

  ngOnInit(): void {
  
    this.popularService.listarPeliculasPopulares().subscribe((resp)=>{
      this.peliculas = resp.results;
    });
    

  }

}
