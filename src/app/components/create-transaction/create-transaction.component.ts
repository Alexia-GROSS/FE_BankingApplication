import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models/transaction.model";
import {TransactionService} from "../../services/transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  transaction: Transaction = new Transaction();
  submitted = false;

  constructor(private transactionService: TransactionService,
              private router: Router) { }

  ngOnInit() {
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
