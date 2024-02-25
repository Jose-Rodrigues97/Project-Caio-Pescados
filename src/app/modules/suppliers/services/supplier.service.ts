import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment-prod';
import { SupplierModel } from '../models/supplier-model/supplier-model.module';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private readonly URL = `${environment.URL}competicao`;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getSupplier(): Observable<SupplierModel> {
    return this.httpClient.get<SupplierModel>(this.URL)
      .pipe(
        catchError(this.handleError))
  }

  getSupplierById(id: number): Observable<SupplierModel> {
    return this.httpClient.get<SupplierModel>(this.URL + '/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  createSupplier(supplier: SupplierModel): Observable<SupplierModel> {
    return this.httpClient.post<SupplierModel>(this.URL, JSON.stringify(supplier), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateSupplier(supplierId: number, supplier: SupplierModel): Observable<SupplierModel> {
    console.log('updateCompany')
    return this.httpClient.put<SupplierModel>(this.URL + '/' + supplierId, JSON.stringify(supplier), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteSupplier(supplierId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + supplierId, this.httpOptions)
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
