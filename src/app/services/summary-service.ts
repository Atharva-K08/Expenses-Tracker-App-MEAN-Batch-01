import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor(private http: HttpClient) {}
  token = localStorage.getItem('token') || '';
  getSummary(): Observable<any> {
    return this.http.get('http://localhost:5000/api/transaction/account/summary', {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
