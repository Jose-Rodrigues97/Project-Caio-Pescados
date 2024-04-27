import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user-model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  private readonly URL = `${environment.URL}company`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(this.URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getUserById(userId: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(this.URL + '/' + userId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(this.URL, JSON.stringify(user), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(userId: string, user: UserModel): Observable<UserModel> {
    return this.httpClient.put<UserModel>(this.URL + '/' + userId, JSON.stringify(user), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(companyId: string) {
    return this.httpClient.delete<any>(this.URL + '/' + companyId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = error.error;
    }
    return throwError(errorMessage);
  };
}
