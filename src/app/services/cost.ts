import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Center, Expense } from '../app';

@Injectable({
  providedIn: 'root'
})
export class CostService {
  private base = 'http://localhost:3333/api';

  constructor(private http: HttpClient) { }

  // Centers
  getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>(`${this.base}/centers`);
  }
  addCenter(body: Partial<Center>) {
    return this.http.post<Center>(`${this.base}/centers`, body);
  }
  deleteCenter(id: string) {
    return this.http.delete(`${this.base}/centers/${id}`);
  }

  // Expenses
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.base}/expenses`);
  }
  addExpense(body: Expense) {
    return this.http.post<Expense>(`${this.base}/expenses`, body);
  }
  deleteExpense(id: string) {
    return this.http.delete(`${this.base}/expenses/${id}`);
  }

  // Dashboard
  getDashboard(month?: string) {
    const q = month ? `?month=${month}` : '';
    return this.http.get<any>(`${this.base}/dashboard${q}`);
  }
}

