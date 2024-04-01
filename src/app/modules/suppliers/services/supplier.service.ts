import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuppliersModel } from '../models/suppliers-model';
import { SupplierModel } from '../models/supplier-model';
import { SupplierPutModel } from '../models/supplierPut-model';


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

  getSupplierById(id: string): Observable<SupplierModel> {
    console.log(this.URL);
    return this.httpClient.get<SupplierModel>(this.URL + '/' + id, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  createSupplier(supplier: SupplierModel): Observable<SupplierModel> {
    return this.httpClient.post<SupplierModel>(this.URL, JSON.stringify(supplier), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError));
  }

  updateSupplier(supplierId: string, supplier: SupplierPutModel): Observable<SupplierPutModel> {
    return this.httpClient.put<SupplierPutModel>(this.URL + '/' + supplierId, JSON.stringify(supplier), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteSupplier(supplierId: string) {
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
