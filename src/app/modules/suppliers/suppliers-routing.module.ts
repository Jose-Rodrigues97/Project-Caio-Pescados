import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { SuppliersComponent } from './suppliers.component';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { ListSuppliersComponent } from './components/supplier-list/suppliers-list.component';

const suppliersRoutes: Routes = [
  {
    path: 'supplier',
    component: SuppliersComponent,
    children: [
      { path: '', redirectTo: 'supplierList', pathMatch: 'full' },
      { path: 'supplierList', component: ListSuppliersComponent },
      { path: 'supplierDetail/:supplierId', component: SupplierDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(suppliersRoutes)],
  exports: [RouterModule]
})

export class SuppliersRoutingModule { }
