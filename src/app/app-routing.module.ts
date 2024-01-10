import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './modules/theme/theme.component';
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

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'collaborators', component: CollaboratorsComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'sale', component: SaleComponent },
      { path: 'stock', component: StockComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'products', component: ProductsComponent }, 
      { path: 'companies', component: CompaniesComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'metrics', component: MetricsComponent },
      { path: 'shippingCompany', component: ShippingCompanyComponent },
      // { path: '**', component: PageNotFoundComponentComponent }
    ],
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
