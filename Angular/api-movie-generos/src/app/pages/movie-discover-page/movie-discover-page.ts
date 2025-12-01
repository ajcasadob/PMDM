import { Component, OnInit } from '@angular/core';
import { MovieGeneroService } from '../../services/movie-genero-service';
import { DiscoverService } from '../../services/discover-service';
import { Router, RouterLink } from '@angular/router';
import { Genre } from '../../interfaces/generos-interface';
import { TvGenre } from '../../interfaces/tv-genres.interface';
import { TvShow } from '../../interfaces/tv-discover.interface';
import { Movie } from '../../interfaces/lista-peliculas-generos-interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-movie-discover-page',
  imports: [FormsModule, DecimalPipe, RouterLink,ReactiveFormsModule],
  templateUrl: './movie-discover-page.html',
  styleUrl: './movie-discover-page.css',
})
export class MovieDiscoverPage implements OnInit {

   genres: Genre[] = []
  discover: Movie[] = []
  idGenres!: number
  genresTv : TvGenre[] = []
  discoverTv : TvShow[] = []
  idGenresTv! : number

constructor(
  private service : MovieGeneroService,
  private serviceDiscover : DiscoverService,
  private router : Router,
  private authenticationService : AuthenticationService 
) {}




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
    this.discoverTv = [];
    if (this.idGenres) {
      this.serviceDiscover.getDiscover(this.idGenres).subscribe(resp => {
        this.discover = resp.results;
      })
    }
  }

  getGenresTv(): void{
    this.service.getGenresTv().subscribe(resp => {
      this.genresTv = resp.genres;
    })
  }

  getDiscoverTv():void{
    this.discover = [];
    if(this.idGenresTv){
        this.serviceDiscover.getDiscoverTv(this.idGenresTv).subscribe(resp =>{
          this.discoverTv = resp.results;
        })
    }
  }

  login(){
    this.authenticationService.createRequestToken().subscribe(resp=>{
      let token = resp.request_token;
      window.open(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:4200/create-session`, '_blank')
    })
  }

}
