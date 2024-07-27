import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductStockModel } from '../models/product-stock-model';
import { ProductsStockModel } from '../models/products-stock-model';
import { StockModel } from '../models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private readonly URL = `${environment.URL}stock`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

  getStockByCompanyId(companyId: string): Observable<ProductsStockModel> {
    return this.httpClient.get<ProductsStockModel>(this.URL + '/company/' + companyId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getStockById(stockId: number): Observable<ProductStockModel> {
    return this.httpClient.get<ProductStockModel>(this.URL + '/' + stockId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }



  createStock(productStockModel: StockModel): Observable<ProductStockModel> {
    return this.httpClient.post<ProductStockModel>(this.URL, JSON.stringify(productStockModel), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateStock(productStockId: number, productStockModel: ProductStockModel): Observable<ProductStockModel> {
    return this.httpClient.put<ProductStockModel>(this.URL + '/' + productStockId, JSON.stringify(productStockModel), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteStock(stockId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + stockId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  getStocks(){
    return this.httpClient.get<any>(this.URL + '/stocks', { headers: this.httpHeaders })
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
