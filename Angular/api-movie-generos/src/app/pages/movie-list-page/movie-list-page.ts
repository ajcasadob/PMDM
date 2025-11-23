import { Component, OnInit } from '@angular/core';
import {Movie as MovieListPopular } from '../../interfaces/movie-list-popular.interface';
import { PopularService } from '../../services/popular-service';
import { TopRatedService } from '../../services/top-rated-service';
import { UpcomingService } from '../../services/upcoming-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-movie-list-page',
  imports: [DecimalPipe, FormsModule, RouterLink],
  templateUrl: './movie-list-page.html',
  styleUrl: './movie-list-page.css',
})
export class MovieListPage implements OnInit{


  movies : MovieListPopular[]=[]
  movieListType: string = 'popular'

  constructor(private popularService:PopularService,
    private topService: TopRatedService,
    private upcomingService : UpcomingService,
    private router: Router
  ){}

  ngOnInit(): void {
    
    this.loadMovies();


  }
loadMovies(): void {
    switch (this.movieListType) {
      case 'popular':
        this.popularService.getPopular().subscribe(resp => {
          this.movies = resp.results;
        });
        break;
      case 'top_rated':
        this.topService.getTop().subscribe(resp => {
          this.movies = resp.results as MovieListPopular[];
        });
        break;
      case 'upcoming':
        this.upcomingService.getUpComing().subscribe(resp => {
          this.movies = resp.results as MovieListPopular[];
        });
        break;
    }
  }

  onMovieListTypeChange(): void {
    this.loadMovies();
  }

  goToDetail(movieId: number): void {
    this.router.navigate(['/popular', movieId]);
  }


}
