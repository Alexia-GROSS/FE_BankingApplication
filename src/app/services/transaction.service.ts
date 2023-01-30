import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Transaction} from "../models/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:8989/transaction';
  transaction: Transaction = new Transaction();

  constructor(private http: HttpClient) { }

  getTransaction(transactionID: Number): Observable<any> {
    console.log("Service", transactionID);
    console.log(`${this.baseUrl}/find/${transactionID}`);
    return this.http.get(`${this.baseUrl}/find/${transactionID}`);
    //return this.http.get(this.baseUrl + `/find/` + transactionID);
  }

  createTransaction(transaction: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, transaction);
  }

  updateTransaction(transactionID: bigint, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${transactionID}`, value);
  }

  deleteTransaction(transactionID: bigint): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${transactionID}`, { responseType: 'text' });
  }

  getTransactionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
