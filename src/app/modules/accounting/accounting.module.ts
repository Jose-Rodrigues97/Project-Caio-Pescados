import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './components/metrics/metrics.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SaleComponent } from './components/sale/sale.component';
import { CardPurchaseComponent } from './components/purchase/components/card-purchase/card-purchase.component';
import { CardSaleComponent } from './components/sale/components/card-sale/card-sale.component';
import { ThemesModule } from '../themes/themes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PurchaseDetailComponent } from './components/purchase/components/purchase-detail/purchase-detail.component';
import { SaleDetailComponent } from './components/sale/components/sale-detail/sale-detail.component';
import { RouterModule } from '@angular/router';
import { AccountingRoutesRoutingModule } from './accounting-routing.module';

@NgModule({
  declarations: [
    MetricsComponent,
    PurchaseComponent,
    CardPurchaseComponent,
    PurchaseDetailComponent,
    CardSaleComponent,
    SaleComponent,
    SaleDetailComponent
  ],
  imports: [
    CommonModule,
    ThemesModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    AccountingRoutesRoutingModule
  ]
})
export class AccountingModule { }
