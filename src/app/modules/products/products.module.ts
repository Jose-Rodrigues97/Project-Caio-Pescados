import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CardProductComponent } from 'src/app/modules/products/components/card-product/card-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
