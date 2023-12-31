import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHistoryComponent } from './account-history.component';

const routes: Routes = [
  {
    path:'',
    component: AccountHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHistoryRoutingModule { }
