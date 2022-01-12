import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authservice:AuthService) { }

  public doLogin(requestLogin:RequestLogin):Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin)
    .pipe(tap((jwt) => (this.authservice.loginResponse = jwt)))
  };
};
