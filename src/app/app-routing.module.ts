import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './modules/themes/themes.component';
import { AboutComponent } from './modules/about/about.component';
import { CollaboratorsComponent } from './modules/collaborators/collaborators.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { PurchaseComponent } from './modules/accounting/components/purchase/purchase.component';
import { SaleComponent } from './modules/accounting/components/sale/sale.component';
import { StockComponent } from './modules/logistic/components/stock/stock.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { MetricsComponent } from './modules/accounting/components/metrics/metrics.component';
import { CompaniesComponent } from './modules/companies/companies.component';
import { ProductsComponent } from './modules/products/products.component';
import { ShippingCompanyComponent } from './modules/logistic/components/shipping-company/shipping-company.component';
import { PageNotFoundComponent } from './modules/themes/components/page-not-found/page-not-found.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { ListCompaniesComponent } from './modules/companies/components/list-companies/list-companies.component';
import { ListCollaboratorsComponent } from './modules/collaborators/components/list-collaborators/list-collaborators.component';

const routes: Routes = [
  {
    path: 'company',
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
