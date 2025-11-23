import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse, Person } from '../interfaces/people-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  

constructor( private http: HttpClient){}


getPeople():Observable <PeopleListResponse>{
  return this.http.get<PeopleListResponse>('https://api.themoviedb.org/3/person/popular')
}

getDetailsPeople(id : number): Observable<Person>{
  return this.http.get<Person>(`https://api.themoviedb.org/3/person/${id}`)
}



}
