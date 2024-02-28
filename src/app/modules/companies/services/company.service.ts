import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompaniesModel } from '../models/company-model/companies-model';
import { CompanyModel } from '../models/company-model/company-model';
import { Companyv2Model } from '../models/company-model/companyv2-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly URL = `${environment.URL}company`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

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

  createCompany(company: Companyv2Model): Observable<Companyv2Model> {
    return this.httpClient.post<Companyv2Model>(this.URL, JSON.stringify(company), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  updateCompany(companyId: number, company: CompanyModel): Observable<CompanyModel> {
    return this.httpClient.put<CompanyModel>(this.URL + '/' + companyId, JSON.stringify(company), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteCompany(companyId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + companyId, { headers: this.httpHeaders })
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
