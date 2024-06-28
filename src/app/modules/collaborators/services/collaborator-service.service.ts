import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user-model';
import { Observable, catchError, throwError } from 'rxjs';
import { CollaboratorModel } from '../models/collaborator-model';
import { CollaboratorsModel } from '../models/collaborators-model';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  private readonly URL = `${environment.URL}user`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<CollaboratorsModel> {
    return this.httpClient.get<CollaboratorsModel>(this.URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getUsersPagination(): Observable<CollaboratorsModel> {
    return this.httpClient.get<CollaboratorsModel>(this.URL + "/pagination", { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getUserById(userId: string): Observable<CollaboratorModel> {
    return this.httpClient.get<CollaboratorModel>(this.URL + '/' + userId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  createUser(user: CollaboratorModel): Observable<CollaboratorModel> {
    return this.httpClient.post<CollaboratorModel>(this.URL, JSON.stringify(user), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(userId: string, user: CollaboratorModel): Observable<CollaboratorModel> {
    return this.httpClient.put<CollaboratorModel>(this.URL + '/' + userId, JSON.stringify(user), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(userId: string) {
    console.log(userId);
    return this.httpClient.delete<any>(this.URL + '/' + userId, { headers: this.httpHeaders })
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
