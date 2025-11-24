import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeoplePopularResponse } from '../interfaces/people-popular-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PeoplePopularListService {
  

  constructor(private http: HttpClient){}

  

  getList():Observable<PeoplePopularResponse>{

    return this.http.get<PeoplePopularResponse>('https://api.themoviedb.org/3/person/popular');
  }

}
