import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { SuppliersComponent } from './suppliers.component';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { ListSuppliersComponent } from './components/supplier-list/suppliers-list.component';

const suppliersRoutes: Routes = [
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [
      { path: '', redirectTo: 'suppliersList', pathMatch: 'full' },
      { path: 'suppliersList', component: ListSuppliersComponent },
      { path: 'supplierDetail/:supplierid', component: SupplierDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(suppliersRoutes)],
  exports: [RouterModule]
})

export class SuppliersRoutingModule { }
