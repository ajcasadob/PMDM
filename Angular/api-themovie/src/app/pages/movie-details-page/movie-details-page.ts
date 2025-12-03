import { Component, OnInit } from '@angular/core';
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

  movie!: MovieDetailsResponse;

  constructor(private serviceMovie: MoviePopularListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.serviceMovie.getMovie(id).subscribe((resp) => {
        this.movie = resp;
      });
    }
  }

}
