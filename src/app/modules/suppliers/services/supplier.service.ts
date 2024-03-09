import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuppliersModel } from '../models/suppliers-model';
import { SupplierModel } from '../models/supplier-model';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private readonly URL = `${environment.URL}supplier`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

  getSuppliers(): Observable<SuppliersModel> {
    return this.httpClient.get<SuppliersModel>(this.URL, { headers: this.httpHeaders })
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
    return this.httpClient.post<SupplierModel>(this.URL, JSON.stringify(supplier), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError));
  }

  updateSupplier(supplierId: number, supplier: SupplierModel): Observable<SupplierModel> {
    return this.httpClient.put<SupplierModel>(this.URL + '/' + supplierId, JSON.stringify(supplier), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteSupplier(supplierId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + supplierId, { headers: this.httpHeaders })
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
