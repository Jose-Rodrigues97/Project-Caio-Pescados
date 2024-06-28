import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { LogisticComponent } from './logistic.component';
import { StockProductDetailComponent } from './components/stock/components/stock-product-detail/stock-product-detail.component';
import { ListStockComponent } from './components/stock/components/list-stock/list-stock.component';
import { ListProductsStockComponent } from './components/stock/components/list-products-stock/list-products-stock.component';

const logisticRoutes: Routes = [
  {
    path: 'logistic',
    component: LogisticComponent,
    children: [
      { path: '', redirectTo: 'stockList', pathMatch: 'full' },
      { path: 'stockList', component: ListStockComponent },
      { path: 'stockProductList/:id', component: ListProductsStockComponent },
      { path: 'stockProductDetail/:id', component: StockProductDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(logisticRoutes)],
  exports: [RouterModule]
})
export class LogisticRoutingModule { }
