import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGeneroListResponse } from '../interfaces/lista-peliculas-generos-interface';
import { TvDiscoverResponse } from '../interfaces/tv-discover.interface';

@Injectable({
  providedIn: 'root',
})
export class DiscoverService {


  constructor(private http: HttpClient) { }



  getDiscover(id : number): Observable <MovieGeneroListResponse>{
    return this.http.get<MovieGeneroListResponse>(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`)
  }

   getDiscoverTv(id : number): Observable <TvDiscoverResponse>{
    return this.http.get<TvDiscoverResponse>(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}`)
  }


}
