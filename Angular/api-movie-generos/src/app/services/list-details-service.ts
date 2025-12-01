import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListDetailsResponse } from '../interfaces/list-details.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListDetailsService {
  
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getListDetails(listId: number): Observable<ListDetailsResponse> {
    return this.http.get<ListDetailsResponse>(
      `${this.baseUrl}/list/${listId}`
    );
  }
}
