import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSupplierComponent } from './components/card-supplier/card-supplier.component';
import { SuppliersComponent } from './suppliers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CompaniesRoutingModule } from './suppliers-routing.module';




@NgModule({
  declarations: [
    CardSupplierComponent,
    SuppliersComponent,
    SupplierDetailComponent
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
export class SuppliersModule { }
