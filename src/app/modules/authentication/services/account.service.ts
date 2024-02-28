import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly URL = `${environment.URL}auth/login`;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  login(login: LoginModel): Observable<TokenModel> {
    return this.httpClient.post<any>(this.URL, JSON.stringify(login), this.httpOptions)
  }
}
