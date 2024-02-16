import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from '../themes/themes.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaseDetailComponent } from './components/purchase/components/purchase-detail/purchase-detail.component';
import { SaleComponent } from './components/sale/sale.component';
import { SaleDetailComponent } from './components/sale/components/sale-detail/sale-detail.component';

const accountingRoutes: Routes = [
  {
    path: '',
    component: ThemesComponent,
    children: [
      { path: '', redirectTo: 'purchase', pathMatch: 'full' },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'purchaseDetail/:id', component: PurchaseDetailComponent },
      { path: 'sale', component: SaleComponent },
      { path: 'saleDetail/:id', component: SaleDetailComponent },
      { path: 'metrics', component: PurchaseComponent }
      // { path: '**', component: CompaniesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(accountingRoutes)],
  exports: [RouterModule]
})
export class AccountingRoutesRoutingModule { }
