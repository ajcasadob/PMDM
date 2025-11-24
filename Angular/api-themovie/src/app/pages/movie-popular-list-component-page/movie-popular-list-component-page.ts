import { Component, OnInit } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Movie } from '../../interfaces/movie-popular-list.interface';
import { MoviePopularListService } from '../../services/movie-popular-list-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-popular-list-component-page',
  imports: [RouterLink],
  templateUrl: './movie-popular-list-component-page.html',
  styleUrl: './movie-popular-list-component-page.css',
})
export class MoviePopularListComponentPage implements OnInit {


  movieList :Movie[]= [];
  constructor(private service: MoviePopularListService) { }

  ngOnInit(): void {
    this.service.getListMovie().subscribe((resp) => {
      this.movieList = resp.results.slice(0, 4);
    });
  }

}
