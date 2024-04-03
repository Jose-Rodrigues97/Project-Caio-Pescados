import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompaniesModel } from '../models/companies-model';
import { CompanyModel } from '../models/company-model';
import { Companyv3Model } from '../models/companyv3-model';

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
    return this.httpClient.get<CompaniesModel>(this.URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getCompanyById(companyId: string): Observable<CompanyModel> {
    return this.httpClient.get<CompanyModel>(this.URL + '/' + companyId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  createCompany(company: CompanyModel): Observable<CompanyModel> {
    return this.httpClient.post<CompanyModel>(this.URL, JSON.stringify(company), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCompany(companyId: string, company: Companyv3Model): Observable<Companyv3Model> {
    return this.httpClient.put<Companyv3Model>(this.URL + '/' + companyId, JSON.stringify(company), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCompany(companyId: string) {
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