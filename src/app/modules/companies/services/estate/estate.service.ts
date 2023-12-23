import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { EstateModel } from 'src/app/modules/companies/models/estate-model';

@Injectable({
  providedIn: 'root'
})
export class EstateService {
  private readonly URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private httpClient: HttpClient) { }

  getUFs(): Observable<EstateModel[]> {
    return this.httpClient.get<EstateModel[]>(this.URL)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}