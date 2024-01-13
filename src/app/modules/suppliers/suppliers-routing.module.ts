import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { ThemeComponent } from '../theme/theme.component';
import { SuppliersComponent } from './suppliers.component';

const suppliersRoutes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'supplierDetail/:id', component: SupplierDetailComponent },
      // { path: '**', component: CompaniesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(suppliersRoutes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
