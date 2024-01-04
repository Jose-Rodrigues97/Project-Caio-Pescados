import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingCompanyComponent } from './components/shipping-company/shipping-company.component';
import { StockComponent } from './components/stock/stock.component';
import { ShippingCompanyCardComponent } from './components/shipping-company/components/shipping-company-card/shipping-company-card.component';
import { ThemeModule } from '../theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StockCardComponent } from './components/stock/components/stock-card/stock-card.component';



@NgModule({
  declarations: [
    ShippingCompanyComponent,
    StockComponent,
    ShippingCompanyCardComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ReactiveFormsModule
  ]
})
export class LogisticModule { }
