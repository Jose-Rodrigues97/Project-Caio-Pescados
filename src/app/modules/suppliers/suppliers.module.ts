import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSupplierComponent } from './components/card-supplier/card-supplier.component';
import { SuppliersComponent } from './suppliers.component';



@NgModule({
  declarations: [
    CardSupplierComponent,
    SuppliersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuppliersModule { }
