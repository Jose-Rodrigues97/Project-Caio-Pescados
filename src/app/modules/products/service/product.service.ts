import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product-model';
import { ProductsModel } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private readonly URL = `${environment.URL}product`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductsModel> {
    return this.httpClient.get<ProductsModel>(this.URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError))
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(this.URL + '/' + id, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(this.URL, JSON.stringify(product), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError));
  }

  updateProduct(productId: number, product: ProductModel): Observable<ProductModel> {
    return this.httpClient.put<ProductModel>(this.URL + '/' + productId, JSON.stringify(product), { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(productId: number) {
    return this.httpClient.delete<any>(this.URL + '/' + productId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  getProductsByStockId(stockId:number){
    return this.httpClient.get<any>(this.URL + '/{stockId}' + stockId, { headers: this.httpHeaders })
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
    return throwError(errorMessage);
  };

}
