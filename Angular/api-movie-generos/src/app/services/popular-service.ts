import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListPopular } from '../interfaces/movie-list-popular.interface';
import { Movie } from '../interfaces/lista-peliculas-generos-interface';

@Injectable({
  providedIn: 'root',
})
export class PopularService {
  

constructor(private http: HttpClient){}

getPopular (): Observable <MovieListPopular>{

  return this.http.get<MovieListPopular>('https://api.themoviedb.org/3/movie/popular')
}

getDetails (id : number) : Observable <Movie>{

  return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`)
}


}
