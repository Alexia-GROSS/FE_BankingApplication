import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { UpdateTransactionComponent } from './components/update-transaction/update-transaction.component';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'all', component: TransactionListComponent },
  { path: 'add', component: CreateTransactionComponent },
  { path: 'update/:id', component: UpdateTransactionComponent },
  { path: 'details/:id', component: TransactionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
