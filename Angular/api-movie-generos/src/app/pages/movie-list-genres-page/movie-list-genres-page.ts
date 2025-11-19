import { Component, OnInit } from '@angular/core';
import { Genre } from '../../interfaces/generos-interface';
import { Movie } from '../../interfaces/lista-peliculas-generos-interface';
import { MovieGeneroService } from '../../services/movie-genero-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list-genres-page',
  imports: [FormsModule],
  templateUrl: './movie-list-genres-page.html',
  styleUrl: './movie-list-genres-page.css',
})
export class MovieListGenresPage implements OnInit {


  genres : Genre[]=[]
  movieList :Movie []=[]


  selectedIdGenre ! : number

  constructor(private servicio: MovieGeneroService){}

  ngOnInit(): void {

    this.servicio.getAll().subscribe((resp=>{
      this.genres = resp.genres;
    }))
    
    
  }

  getId():void {
    if(this.selectedIdGenre){
      this.servicio.getMovieGenre(this.selectedIdGenre).subscribe(resp =>{
        this.movieList = resp.results;
      })

    }

  }

}
