import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorsComponent } from './modules/collaborators/collaborators.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { CompaniesComponent } from './modules/companies/companies.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { CreateAccountComponent } from './modules/authentication/components/create-account/create-account.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';
import { ProductsComponent } from './modules/products/products.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'createAccount', component: CreateAccountComponent }
    ]
  },
  {
    path: '',
    component: CompaniesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'collaborator',
    component: CollaboratorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier',
    component: SuppliersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
