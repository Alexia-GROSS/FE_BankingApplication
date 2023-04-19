import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Moneybalance} from "../models/moneybalance.model";

@Injectable({
  providedIn: 'root'
})
export class MoneybalanceService {

  private baseUrl = 'http://localhost:8989/moneybalance';

  private mockData: Moneybalance[] = [
    {
      categoryName: "data1",
      moneybalance: 1
    },
    {
      categoryName: "data2",
      moneybalance: 2
    },
    {
      categoryName: "data3",
      moneybalance: 3
    },
    {
      categoryName: "data4",
      moneybalance: 4
    }
  ];

  private dataSubject = new BehaviorSubject<Moneybalance[]>(this.mockData);

  constructor(private http: HttpClient) { }

  getAllCategoriesMoneyBalance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/moneybalancepercategory`);
  }

  getMoneySpentForAllCategoriesSortedPerMonth(month: bigint): Observable<any> {
    return this.http.get(`${this.baseUrl}/moneybalancepercategorypermoney/perdate/${month}`);
  }

  getMoneyBalance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sumoftransactions`);
  }

  getMoneyInAccount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/moneyinaccount`);
  }




}
