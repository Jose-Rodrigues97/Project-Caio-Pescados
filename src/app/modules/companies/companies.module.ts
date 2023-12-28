import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from '../../modules/companies/companies.component';
import { CardCompanyComponent } from './components/card-company/card-company.component';
import { ThemeModule } from '../theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CompaniesComponent,
    CardCompanyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    FontAwesomeModule
  ]
})
export class CompaniesModule { }
