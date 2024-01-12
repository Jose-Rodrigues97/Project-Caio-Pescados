import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from '../../modules/companies/companies.component';
import { CardCompanyComponent } from './components/card-company/card-company.component';
import { ThemeModule } from '../theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { RouterModule } from '@angular/router';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  declarations: [
    CompaniesComponent,
    CardCompanyComponent,
    CompanyDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    FontAwesomeModule, 
    RouterModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
