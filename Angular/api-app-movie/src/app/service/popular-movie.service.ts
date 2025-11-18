import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMoviePage } from '../pages/popular-movie-page/popular-movie-page';
import { PopularResponse } from '../interface/popular-interface';

@Injectable({
  providedIn: 'root',
})
export class PopularMovieService {
  


constructor (private http: HttpClient){}

private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=d0fd44ec09aaaed766b1e79ffa2ddb4d'

listarPeliculasPopulares ( ): Observable<PopularResponse>{
return this.http.get<PopularResponse>(this.apiUrl)
}

}
