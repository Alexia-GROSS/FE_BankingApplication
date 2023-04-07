import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Transaction} from "../../models/transaction.model";
import {TransactionService} from "../../services/transaction.service";
import {Router} from "@angular/router";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{
  transactions: Observable<Transaction[]>;
  categories: Observable<Category[]>;
  info: any;

  constructor(private transactionService: TransactionService, private categoryService: CategoryService, private router: Router, private token: TokenStorageService) {
  }

  ngOnInit(){
    this.reloadData();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  reloadData() {
    this.transactions = this.transactionService.getTransactionList();
    this.transactionService.getTransactionList().subscribe(
      data => {
        console.log(data);
      });
    this.categories = this.categoryService.getCategoryList();
  }

  deleteTransaction(transactionID: bigint) {
    this.transactionService.deleteTransaction(transactionID)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  transactionDetails(transactionID: bigint){
    console.log("List", transactionID);
    this.router.navigate(['details', transactionID]);
  }

  updateTransaction(transactionID: bigint){
    this.router.navigate(['update', transactionID]);
  }
}
