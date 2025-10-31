import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../interfaces/people-list-response.interface';



@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  private apiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  getPeopleList(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(this.apiUrl);
  }
  
}
