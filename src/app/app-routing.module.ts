import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SaleComponent } from './components/sale/sale.component';
import { StockComponent } from './components/stock/stock.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'collaborators', component: CollaboratorsComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'sale', component: SaleComponent },
      { path: 'stock', component: StockComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'products', component: ProductsComponent },
      // { path: '**', component: PageNotFoundComponentComponent }
    ],
    // canActivate: [AuthGuard]
  }
  // },
  // {
  //   path: '',
  //   component: AuthenticationComponentComponent,
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //     { path: 'login', component: LoginComponentComponent },
  //     { path: 'cadastro', component: RegisterComponentComponent }
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
