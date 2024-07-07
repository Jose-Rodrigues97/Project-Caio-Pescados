import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PurchasesModel } from '../models/purchases-model';
import { PurchaseModel } from '../models/purchase-model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private readonly URL = `${environment.URL}purchase`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

  getPurchases(): Observable<PurchasesModel> {
    return this.httpClient.get<PurchasesModel>(this.URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getPurchaseById(id: number): Observable<PurchaseModel> {
    console.log(this.URL);
    return this.httpClient.get<PurchaseModel>(this.URL + '/' + id, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  createPurchase(purchase: PurchaseModel): Observable<PurchaseModel> {
    return this.httpClient.post<PurchaseModel>(this.URL, JSON.stringify(purchase), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError));
  }

  updatePurchase(purchaseId: number, purchase: PurchaseModel): Observable<PurchaseModel> {
    return this.httpClient.put<PurchaseModel>(this.URL + '/' + purchaseId, JSON.stringify(purchase), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePurchase(purchaseId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + purchaseId, { headers: this.httpHeaders })
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
      errorMessage = error.error;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
