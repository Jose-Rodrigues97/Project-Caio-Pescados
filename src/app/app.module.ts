import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesModule } from './modules/companies/companies.module';
import { ProductsModule } from './modules/products/products.module';
import { AboutModule } from './modules/about/about.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { CustomersModule } from './modules/customers/customers.module';
import { MetricsModule } from './modules/metrics/metrics.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { SaleModule } from './modules/sale/sale.module';
import { StockModule } from './modules/stock/stock.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ThemeModule } from './modules/theme/theme.module';
import { LayoutPageComponent } from './modules/theme/components/layout-page/layout-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompaniesModule,
    ProductsModule,
    AboutModule,
    ConfigurationModule,
    CustomersModule,
    MetricsModule,
    PurchaseModule,
    SaleModule,
    StockModule,
    SuppliersModule,
    AuthenticationModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
