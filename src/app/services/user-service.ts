import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  forgetPassword(email: string) {
    return this.http.post(`${this.apiURL}/auth/forgot-password`,  email );
  }
  login(loginData:{email:string, password:string}){
    return this.http.post(`${this.apiURL}/auth/login`, loginData)
  }
  register(registerData:{email:string, password:string, name:string}){
    return this.http.post(`${this.apiURL}/auth/`, registerData)
  }
}
