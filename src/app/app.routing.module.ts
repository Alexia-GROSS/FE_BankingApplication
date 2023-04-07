import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { UpdateTransactionComponent } from './components/update-transaction/update-transaction.component';
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/authentication/register/register.component";
import {LoginComponent} from "./components/authentication/login/login.component";
import {AuthHomeComponent} from "./components/authentication/auth-home/auth-home.component";
import {UserComponent} from "./components/authentication/user/user.component";
import {PmComponent} from "./components/authentication/pm/pm.component";
import {AdminComponent} from "./components/authentication/admin/admin.component";
import {FootprintPageComponent} from "./components/footprint-page/footprint-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'all', component: TransactionListComponent },
  { path: 'add', component: CreateTransactionComponent },
  { path: 'update/:id', component: UpdateTransactionComponent },
  { path: 'details/:id', component: TransactionDetailsComponent },
  { path: 'authhome', component: AuthHomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'pm', component: PmComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'allfootprint', component: FootprintPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
