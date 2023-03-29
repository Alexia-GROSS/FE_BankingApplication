import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { UpdateTransactionComponent } from './components/update-transaction/update-transaction.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from "./components/authentication/login/login.component";
import {UserComponent} from "./components/authentication/user/user.component";
import {RegisterComponent} from "./components/authentication/register/register.component";
import {AuthHomeComponent} from "./components/authentication/auth-home/auth-home.component";
import {AdminComponent} from "./components/authentication/admin/admin.component";
import {PmComponent} from "./components/authentication/pm/pm.component";

import { MatSidenavModule } from '@angular/material/sidenav';
import {CommonModule} from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {httpInterceptorProviders} from "./components/authentication/auth/auth-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    CreateTransactionComponent,
    TransactionDetailsComponent,
    TransactionListComponent,
    UpdateTransactionComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    AuthHomeComponent,
    AdminComponent,
    PmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
