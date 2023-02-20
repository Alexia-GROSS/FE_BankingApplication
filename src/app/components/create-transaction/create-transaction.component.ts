import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models/transaction.model";
import {TransactionService} from "../../services/transaction.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  transaction: Transaction = new Transaction();
  submitted = false;
  categories: Observable<Category[]>;
  completeDate: Date;
  localCompleteDate: string;


  constructor(private transactionService: TransactionService, private categoryService: CategoryService,
              private router: Router) {
    this.completeDate = new Date();
    this.localCompleteDate = this.completeDate.toISOString();
    this.localCompleteDate = this.localCompleteDate.substring(0, this.localCompleteDate.length - 1);
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
  }

  newEmployee(): void {
    this.submitted = false;
    this.transaction = new Transaction();
  }

  save() {
    this.transactionService
      .createTransaction(this.transaction).subscribe(data => {
        console.log(data)
        this.transaction = new Transaction();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
