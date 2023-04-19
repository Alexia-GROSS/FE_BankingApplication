import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Footprint} from "../models/footprint.model";


@Injectable({
  providedIn: 'root'
})
export class FootprintService {
  private baseUrl = 'http://localhost:8989/footprint';
  private mockData: Footprint[] = [
    {
      categoryName: "data1",
      footprint: 1
    },
    {
      categoryName: "data2",
      footprint: 2
    },
    {
      categoryName: "data3",
      footprint: 3
    },
    {
      categoryName: "data4",
      footprint: 4
    }
  ];

  private dataSubject = new BehaviorSubject<Footprint[]>(this.mockData);

  $data = this.dataSubject.asObservable();

  addData(newData: Footprint) {
    this.mockData.push(newData);
    this.dataSubject.next(this.mockData);
  }

  constructor(private http: HttpClient) { }

  getFootprintForAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allfootprint`);
  }

  getFootprintForAllCategoriesPerMonth(month: bigint): Observable<any> {
    return this.http.get(`${this.baseUrl}/perdate/${month}`);
  }

}
