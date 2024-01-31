import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from '../themes/themes.component';
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

const customersRoutes: Routes = [
  {
    path: '',
    component: ThemesComponent,
    children: [
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      { path: 'companies', component: CustomersComponent },
      { path: 'customerDetail/:id', component: CustomerDetailComponent },
      // { path: '**', component: CompaniesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
