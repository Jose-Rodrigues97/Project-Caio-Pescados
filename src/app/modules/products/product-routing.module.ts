import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const productsRoutes: Routes = [
  {
    path: 'product',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'productList', pathMatch: 'full' },
      { path: 'productList', component: ProductListComponent },
      { path: 'productDetail/:productId', component: ProductDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(productsRoutes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
