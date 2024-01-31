import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { ThemesComponent } from '../themes/themes.component';
import { CompaniesComponent } from './companies.component';

const companiesRoutes: Routes = [
  {
    path: '',
    component: ThemesComponent,
    children: [
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      { path: 'companies', component: CompaniesComponent },
      { path: 'companyDetail/:id', component: CompanyDetailComponent },
      // { path: '**', component: CompaniesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(companiesRoutes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
