import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  forgetPassword(email: string) {
    return this.http.post(`${this.apiURL}/auth/forgot-password`, { email });
  }
}
