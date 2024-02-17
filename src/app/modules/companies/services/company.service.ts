import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment-prod';
import { CompaniesModel } from '../models/company-model/companies-model.module';
import { CompanyModel } from '../models/company-model/company-model.module';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly URL = `${environment.URL}competicao`;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCompanies(): Observable<CompaniesModel> {
    return this.httpClient.get<CompaniesModel>(this.URL)
      .pipe(
        catchError(this.handleError))
  }

  getCompanyById(id: number): Observable<CompanyModel> {
    return this.httpClient.get<CompanyModel>(this.URL + '/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  saveCompany(competition: CompanyModel): Observable<CompanyModel> {
    return this.httpClient.post<CompanyModel>(this.URL, JSON.stringify(competition), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateCompany(competitionId: number, competition: CompanyModel): Observable<CompanyModel> {
    console.log(competition)
    return this.httpClient.put<CompanyModel>(this.URL + '/' + competitionId, JSON.stringify(competition), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteCompany(companyId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + companyId, this.httpOptions)
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
