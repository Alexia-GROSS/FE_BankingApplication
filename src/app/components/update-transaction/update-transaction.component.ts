import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models/transaction.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {
  transactionID: Number;
  transaction: Transaction;

  constructor(private route: ActivatedRoute,private router: Router,
              private transactionService: TransactionService) { }

  ngOnInit() {
    this.transaction = new Transaction();

    this.transactionID = this.route.snapshot.params['transactionID'];

    /*this.transactionService.getTransaction(this.transactionID)
      .subscribe(data => {
        console.log(data)
        this.transaction = data;
      }, error => console.log(error));*/
  }

  /*updateTransaction() {
    this.transactionService.updateTransaction(this.transactionID, this.transaction)
      .subscribe(data => {
        console.log(data);
        this.transaction = new Transaction();
        this.gotoList();
      }, error => console.log(error));
  }*/

  /*onSubmit() {
    this.updateTransaction();
  }*/

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
