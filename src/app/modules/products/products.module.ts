import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

import { ThemesModule } from '../themes/themes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './product-routing.module';
import { CardProductComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CardProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ThemesModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
