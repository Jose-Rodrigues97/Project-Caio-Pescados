import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from '../themes/themes.component';
import { ListPurchaseComponent } from './components/purchase/components/purchase-list/purchase-list.component';
import { PurchaseDetailComponent } from './components/purchase/components/purchase-detail/purchase-detail.component';
import { SaleDetailComponent } from './components/sale/components/sale-detail/sale-detail.component';
import { SaleListComponent } from './components/sale/components/sale-list/sale-list.component';

const accountingRoutes: Routes = [
  {
    path: 'purchase',
    component: ThemesComponent,
    children: [
      { path: '', redirectTo: 'purchaseList', pathMatch: 'full' },
      { path: 'purchaseList', component: ListPurchaseComponent },
      { path: 'purchaseDetail/:purchaseid', component: PurchaseDetailComponent },
      { path: 'saleList', component: SaleListComponent },
      { path: 'saleDetail/:id', component: SaleDetailComponent },
      { path: 'metrics', component: ListPurchaseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(accountingRoutes)],
  exports: [RouterModule]
})
export class AccountingRoutesRoutingModule { }
