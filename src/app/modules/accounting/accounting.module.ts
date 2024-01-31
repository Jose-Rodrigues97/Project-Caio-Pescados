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



@NgModule({
  declarations: [
    MetricsComponent,
    PurchaseComponent,
    SaleComponent,
    CardPurchaseComponent,
    CardSaleComponent
  ],
  imports: [
    CommonModule,
    ThemesModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AccountingModule { }
