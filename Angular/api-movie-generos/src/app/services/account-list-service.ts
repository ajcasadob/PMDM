import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountListsResponse } from '../interfaces/account-lists.interface';
import { Observable, throwError } from 'rxjs';

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
}
