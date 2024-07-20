import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LogisticRoutingModule } from './logistic-routing.module';
import { ThemesModule } from '../themes/themes.module';
import { LogisticComponent } from './logistic.component';
import { StockCardComponent } from './components/stock/components/stock-card/stock-card.component';
import { ListStockComponent } from './components/stock/components/list-stock/list-stock.component';
import { StockProductDetailComponent } from './components/stock/components/stock-product-detail/stock-product-detail.component';
import { ListProductsStockComponent } from './components/stock/components/list-products-stock/list-products-stock.component';
import { ProductStockCardComponent } from './components/stock/components/product-stock-card/product-stock-card.component';


@NgModule({
  declarations: [
    LogisticComponent,
    ListStockComponent,
    StockCardComponent,
    StockProductDetailComponent,
    ListProductsStockComponent,
    ProductStockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesModule,
    FontAwesomeModule,
    RouterModule,
    LogisticRoutingModule
  ]
})
export class LogisticModule { }
