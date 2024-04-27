import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageModel } from '../../../models/image-model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly URL = `${environment.URL}image`;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('Token')!,
  })

  constructor(private httpClient: HttpClient) { }

  getImageById(imageId: string): Observable<ImageModel> {
    return this.httpClient.get<ImageModel>(this.URL + '/' + imageId, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  createImage(formData: FormData): Observable<ImageModel> {
    return this.httpClient.post<ImageModel>(this.URL, formData, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateImage(imageId: string, formData: FormData): Observable<ImageModel> {
    return this.httpClient.put<ImageModel>(this.URL + '/' + imageId, formData, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteImage(imageId: string) {
    return this.httpClient.delete<any>(this.URL + '/' + imageId, { headers: this.httpHeaders })
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
