import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesModule } from './modules/companies/companies.module';
import { ProductsModule } from './modules/products/products.module';
import { AboutModule } from './modules/about/about.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { CustomersModule } from './modules/customers/customers.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ThemeModule } from './modules/theme/theme.module';
import { CollaboratorsComponent } from './modules/collaborators/collaborators.component';
import { LogisticModule } from './modules/logistic/logistic.module';
import { AccountingModule } from './modules/accounting/accounting.module';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';

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
    SuppliersModule,
    AuthenticationModule,
    ThemeModule,
    LogisticModule,
    AccountingModule,
    CollaboratorsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
