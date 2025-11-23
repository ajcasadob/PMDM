import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListUpcoming } from '../interfaces/movie-list-upcoming.interface';

@Injectable({
  providedIn: 'root',
})
export class UpcomingService {


  constructor(private http: HttpClient){}

  getUpComing () : Observable<MovieListUpcoming>{


    return this.http.get<MovieListUpcoming>('https://api.themoviedb.org/3/movie/upcoming')
  }
  
}
