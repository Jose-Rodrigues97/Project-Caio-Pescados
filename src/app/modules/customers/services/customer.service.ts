import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersModel } from '../models/customers-model';
import { CustomerModel } from '../models/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly URL = `${environment.URL}buyer`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!, 
  })

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<CustomersModel> {
    return this.httpClient.get<CustomersModel>(this.URL + "/pagination", { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getCustomerById(companyId: string): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(this.URL + '/' + companyId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  createCustomer(company: CustomerModel): Observable<CustomerModel> {
    return this.httpClient.post<CustomerModel>(this.URL, JSON.stringify(company), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCustomer(buyerId: string, company: CustomerModel): Observable<CustomerModel> {
    return this.httpClient.put<CustomerModel>(this.URL + '/' + buyerId, JSON.stringify(company), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCustomer(customerId: string) {
    return this.httpClient.delete<any>(this.URL + '/' + customerId, { headers: this.httpHeaders })
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


