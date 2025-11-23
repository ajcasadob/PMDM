import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListTopRated } from '../interfaces/movie-list-top-rated.interface';

@Injectable({
  providedIn: 'root',
})
export class TopRatedService {
  
constructor(private http: HttpClient){}

getTop(): Observable <MovieListTopRated>{

  return this.http.get<MovieListTopRated>('https://api.themoviedb.org/3/movie/top_rated')
}

}
