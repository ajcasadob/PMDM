import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountListsResponse } from '../interfaces/account-lists.interface';
import { Observable, throwError } from 'rxjs';
import { RemoveMovieFromListDto } from '../dto/remove-movie-from-list.dto';
import { AddMovieToListDto } from '../dto/add-movie-to-list.dto';

@Injectable({
  providedIn: 'root',
})
export class AccountListService {
  

  private readonly baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getAccountLists(page: number = 1): Observable<AccountListsResponse> {
    const accountId = localStorage.getItem('account_id');
    const sessionId = localStorage.getItem('session_id');

    if (!accountId || !sessionId) {
      return throwError(() => new Error('No autenticado'));
    }

    return this.http.get<AccountListsResponse>(
      `${this.baseUrl}/account/${accountId}/lists`,
      {
        params: {
          session_id: sessionId,
          page: page.toString()
        }
      }
    );
  }

  removeMovieFromList(listId: number, dto: RemoveMovieFromListDto): Observable<any> {
    const sessionId = localStorage.getItem('session_id');

    if (!sessionId) {
      return throwError(() => new Error('No autenticado'));
    }

    return this.http.post(
      `${this.baseUrl}/list/${listId}/remove_item`,
      dto,
      {
        params: {
          session_id: sessionId
        }
      }
    );
  }

  addMovieToList(listId: number, dto: AddMovieToListDto): Observable<any> {
    const sessionId = localStorage.getItem('session_id');

    if (!sessionId) {
      return throwError(() => new Error('No autenticado'));
    }

    return this.http.post(
      `${this.baseUrl}/list/${listId}/add_item`,
      dto,
      {
        params: {
          session_id: sessionId
        }
      }
    );
  }
}
