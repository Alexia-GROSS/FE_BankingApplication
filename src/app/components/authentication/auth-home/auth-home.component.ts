import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.token.getUsername())
    console.log(this.token.getAuthorities())
  }

  transactionList(){
    this.router.navigate(['all']);
  }

  addTransaction(){
    this.router.navigate(['add']);
  }

  footprint(){
    this.router.navigate(['allfootprint']);
  }


  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
