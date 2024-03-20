import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { TokenModel } from '../models/token-model';
import { CreateAccountModel } from '../models/create-account-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly URLLogin = `${environment.URL}auth/login`;
  private readonly URLCreateUser = `${environment.URL}user`;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  login(login: LoginModel): Observable<TokenModel> {
    return this.httpClient.post<any>(this.URLLogin, JSON.stringify(login), this.httpOptions)
  }

  createAccount(account: CreateAccountModel) {
    return this.httpClient.post<any>(this.URLCreateUser, JSON.stringify(account), this.httpOptions)
  }
}
