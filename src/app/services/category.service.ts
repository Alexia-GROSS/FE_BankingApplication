import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8989/category';
  category: Category = new Category();

  constructor(private http: HttpClient) { }


  getCategoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
