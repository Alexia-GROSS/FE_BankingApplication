import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models/transaction.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionService} from "../../services/transaction.service";
import {Observable} from "rxjs";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {
  transactionID: Number;
  transaction: Transaction;
  submitted = false;
  categories: Observable<Category[]>;
  completeDate: Date;
  localCompleteDate: string;
  updatedTransaction: Transaction = new Transaction();

  constructor(private route: ActivatedRoute,private router: Router,
              private transactionService: TransactionService, private categoryService: CategoryService) {
      this.completeDate = new Date();
      this.localCompleteDate = this.completeDate.toISOString();
      this.localCompleteDate = this.localCompleteDate.substring(0, this.localCompleteDate.length - 1);
  }


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const transactionIdFromRoute = Number(routeParams.get('id'));
    console.log("Details", transactionIdFromRoute);

    this.transactionService.getTransaction(transactionIdFromRoute)
      .subscribe(data => {
        console.log("Initial set-up", data)
        this.transaction = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
  }

  updateTransaction() {
    this.transactionService.updateTransaction(this.transaction)
      .subscribe(data => {
        console.log("Updated transaction", data);
        this.updatedTransaction = new Transaction();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateTransaction();
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
