import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { AboutComponent } from './components/about/about.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SaleComponent } from './components/sale/sale.component';
import { ProductsComponent } from './components/products/products.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { StockComponent } from './components/stock/stock.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { CardCompanyComponent } from './components/card-company/card-company.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ContentAreaComponent,
    AboutComponent,
    CollaboratorsComponent,
    CustomersComponent,
    PurchaseComponent,
    SaleComponent,
    ProductsComponent,
    SuppliersComponent,
    StockComponent,
    CompaniesComponent,
    ConfigurationComponent,
    MetricsComponent,
    CardCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
