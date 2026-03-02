import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  apiURL = 'http://localhost:5000/api';
  token = localStorage.getItem('token') || '';

  constructor(private http: HttpClient) {}

  addCategory(category: any) {
    return this.http.post(`${this.apiURL}/transcation-category/`, category, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
  getCategory() {
    return this.http.get(`${this.apiURL}/transcation-category/`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
  getTransactions() {
    return this.http.get(`${this.apiURL}/transaction/`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
  addTransaction(transaction: any) {
    return this.http.post(`${this.apiURL}/transaction/`, transaction, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
