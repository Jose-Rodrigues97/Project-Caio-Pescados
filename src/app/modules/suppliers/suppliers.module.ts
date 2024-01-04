import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSupplierComponent } from './components/card-supplier/card-supplier.component';
import { SuppliersComponent } from './suppliers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';



@NgModule({
  declarations: [
    CardSupplierComponent,
    SuppliersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThemeModule
  ]
})
export class SuppliersModule { }
