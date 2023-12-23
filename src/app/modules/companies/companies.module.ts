import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from '../../modules/companies/companies.component';
import { CardCompanyComponent } from './components/card-company/card-company.component';

@NgModule({
  declarations: [
    CompaniesComponent,
    CardCompanyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompaniesModule { }
