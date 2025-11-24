import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularResponse } from '../interfaces/movie-popular-list.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviePopularListService {
  

  constructor(private http: HttpClient) {}

  getListMovie():Observable<MoviePopularResponse> {

  return  this.http.get<MoviePopularResponse>('https://api.themoviedb.org/3/movie/popular');
}
}