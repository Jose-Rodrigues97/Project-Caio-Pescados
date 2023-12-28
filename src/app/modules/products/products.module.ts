import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CardProductComponent } from 'src/app/modules/products/components/card-product/card-product.component';
import { ThemeModule } from '../theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
