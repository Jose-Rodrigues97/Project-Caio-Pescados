import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from '../../modules/companies/companies.component';
import { CardCompanyComponent } from './components/card-company/card-company.component';
import { ThemesModule } from '../themes/themes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { RouterModule } from '@angular/router';
import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';

@NgModule({
  declarations: [
    CompaniesComponent,
    CardCompanyComponent,
    CompanyDetailComponent,
    ListCompaniesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesModule,
    FontAwesomeModule, 
    RouterModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
