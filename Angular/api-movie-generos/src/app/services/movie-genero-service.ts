import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGeneros } from '../interfaces/generos-interface';
import { MovieGeneroListResponse } from '../interfaces/lista-peliculas-generos-interface';

@Injectable({
  providedIn: 'root',
})
export class MovieGeneroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<MovieGeneros> {

    return this.http.get<MovieGeneros>('https://api.themoviedb.org/3/genre/movie/list')

  }

  getMovieGenre(id: number):Observable<MovieGeneroListResponse>{

    return this.http.get<MovieGeneroListResponse>(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`)

  }

  

}
