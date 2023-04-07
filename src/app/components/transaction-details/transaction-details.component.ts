import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models/transaction.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionService} from "../../services/transaction.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  transaction: Transaction;
  info:any;

  constructor(private route: ActivatedRoute,private router: Router,
              private transactionService: TransactionService, private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    const routeParams = this.route.snapshot.paramMap;
    const transactionIdFromRoute = Number(routeParams.get('id'));
    console.log("Details", transactionIdFromRoute);

    this.transactionService.getTransaction(transactionIdFromRoute)
      .subscribe(data => {
        console.log(data)
        this.transaction = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['all']);
  }
}
