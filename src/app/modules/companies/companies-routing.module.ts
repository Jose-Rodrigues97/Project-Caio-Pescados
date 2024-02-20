import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompaniesComponent } from './companies.component';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';

const companiesRoutes: Routes = [
  {
    path: 'company',
    component: CompaniesComponent,
    children: [
      { path: '', redirectTo: 'companiesList', pathMatch: 'full' },
      { path: 'companiesList', component: ListCompaniesComponent },
      { path: 'companyDetail/:companyId', component: CompanyDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(companiesRoutes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {

}
