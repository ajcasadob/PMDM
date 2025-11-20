import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGeneros } from '../interfaces/generos-interface';
import { MovieGeneroListResponse } from '../interfaces/lista-peliculas-generos-interface';
import { TvGenresResponse } from '../interfaces/tv-genres.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieGeneroService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<MovieGeneros> {

    return this.http.get<MovieGeneros>('https://api.themoviedb.org/3/genre/movie/list')

  }

  getGenresTv(id: number):Observable<TvGenresResponse>{

    return this.http.get<TvGenresResponse>(`https://api.themoviedb.org/3/genre/tv/list`)

  }

  

}
