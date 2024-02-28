import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorsComponent } from './modules/collaborators/collaborators.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { CompaniesComponent } from './modules/companies/companies.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { CreateAccountComponent } from './modules/authentication/components/create-account/create-account.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: CompaniesComponent,
    children: [
      //{ path: 'companiesList', component: ListCompaniesComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'customers', component: CustomersComponent },
      // { path: 'purchase', component: PurchaseComponent },
      // { path: 'sale', component: SaleComponent },
      // { path: 'stock', component: StockComponent },
      // { path: 'suppliers', component: SuppliersComponent },
      // { path: 'products', component: ProductsComponent }, 
      // { path: 'configuration', component: ConfigurationComponent },
      // { path: 'metrics', component: MetricsComponent },
      // { path: 'shippingCompany', component: ShippingCompanyComponent },
      //  { path: '**', component: PageNotFoundComponent }
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: 'collaborator',
    component: CollaboratorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
