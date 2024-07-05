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

  getStockByProductId(productId: number): Observable<ProductStockModel[]> {
    return this.httpClient.get<ProductStockModel[]>(this.URL + '/product/' + productId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  createStock(productStockModel: StockModel): Observable<ProductStockModel> {
    return this.httpClient.post<ProductStockModel>(this.URL, JSON.stringify(productStockModel), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateStock(productStockId: string, productStockModel: ProductStockModel): Observable<ProductStockModel> {
    return this.httpClient.put<ProductStockModel>(this.URL + '/' + productStockId, JSON.stringify(productStockModel), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteStock(companyId: string) {
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
