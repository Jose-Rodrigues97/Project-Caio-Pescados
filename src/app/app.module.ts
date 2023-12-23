import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CompaniesModule,
    ProductsModule,
    AboutModule,
    ConfigurationModule,
    CustomersModule,
    MetricsModule,
    PurchaseModule,
    SaleModule,
    StockModule,
    SuppliersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
