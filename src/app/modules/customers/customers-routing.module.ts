import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';

const customersRoutes: Routes = [
  {
    path: 'customer',
    component: CustomersComponent,
    children: [
      { path: '', redirectTo: 'customersList', pathMatch: 'full' },
      { path: 'customersList', component: ListCustomersComponent },
      { path: 'customerDetail/:id', component: CustomerDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
