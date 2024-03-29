import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSupplierComponent } from './components/card-supplier/card-supplier.component';
import { SuppliersComponent } from './suppliers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { ListSuppliersComponent } from './components/supplier-list/suppliers-list.component';
import { ThemesModule } from '../themes/themes.module';


@NgModule({
  declarations: [
    CardSupplierComponent,
    SuppliersComponent,
    ListSuppliersComponent,
    SupplierDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesModule,
    FontAwesomeModule,
    RouterModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
