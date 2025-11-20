import { Component, OnInit } from '@angular/core';
import { Genre } from '../../interfaces/generos-interface';
import { Movie } from '../../interfaces/lista-peliculas-generos-interface';
import { MovieGeneroService } from '../../services/movie-genero-service';
import { FormsModule } from '@angular/forms';
import { DiscoverService } from '../../services/discover-service';
import { TvGenre } from '../../interfaces/tv-genres.interface';
import { TvShow } from '../../interfaces/tv-discover.interface';

@Component({
  selector: 'app-movie-list-genres-page',
  imports: [FormsModule],
  templateUrl: './movie-list-genres-page.html',
  styleUrl: './movie-list-genres-page.css',
})
export class MovieListGenresPage implements OnInit {


  genres: Genre[] = []
  discover: Movie[] = []
  idGenres!: number
  genresTv : TvGenre[] = []
  discoverTv : TvShow[] = []
  idGenresTv! : number 


 constructor(private service: MovieGeneroService,
    private serviceDiscover: DiscoverService
  ) { }

  
  onGenreChange(): void {
    this.getDiscover();
  }

  ngOnInit(): void {
    this.getGenres();
    this.getGenresTv();
  }

  getGenres(): void {
    this.service.getGenres().subscribe(resp => {
      this.genres = resp.genres;
    })
  }

  getDiscover(): void {
    if (this.idGenres) {
      this.serviceDiscover.getDiscover(this.idGenres).subscribe(resp => {
        this.discover = resp.results;
      })

    }
  }

  getGenresTv(): void{
    this.service.getGenresTv(0).subscribe(resp=>{
      this.genresTv = resp.genres;
    }

    )
    
    
  }

  getDiscoverTv():void{
    if(this.idGenresTv){
        this.serviceDiscover.getDiscoverTv(this.idGenresTv).subscribe(resp =>{
          this.discoverTv = resp.results;
        })
    }
  }
}
