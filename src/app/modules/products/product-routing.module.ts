import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './products.component';


const productsRoutes: Routes = [
  {
    path: 'product',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'productsList', pathMatch: 'full' },
      { path: 'productList', component: ProductsComponent },
      { path: 'producDetail/:producId', component: ProductsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(productsRoutes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
