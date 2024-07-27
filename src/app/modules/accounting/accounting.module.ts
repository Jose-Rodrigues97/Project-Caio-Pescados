import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ListPurchaseComponent } from './components/purchase/components/purchase-list/purchase-list.component';
import { CardPurchaseComponent } from './components/purchase/components/card-purchase/card-purchase.component';
import { CardSaleComponent } from './components/sale/components/card-sale/card-sale.component';
import { ThemesModule } from '../themes/themes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PurchaseDetailComponent } from './components/purchase/components/purchase-detail/purchase-detail.component';
import { SaleDetailComponent } from './components/sale/components/sale-detail/sale-detail.component';
import { RouterModule } from '@angular/router';
import { AccountingRoutesRoutingModule } from './accounting-routing.module';
import { SaleListComponent } from './components/sale/components/sale-list/sale-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    MetricsComponent,
    ListPurchaseComponent,
    CardPurchaseComponent,
    PurchaseDetailComponent,
    CardSaleComponent,
    SaleDetailComponent,
    SaleListComponent
  ],
  imports: [
    CommonModule,
    ThemesModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    AccountingRoutesRoutingModule,
    MatTableModule
  ]
})
export class AccountingModule { }
