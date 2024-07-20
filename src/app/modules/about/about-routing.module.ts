import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { AboutComponent } from './about.component';
import { DetailsComponent } from './components/details/details.component';

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: DetailsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(aboutRoutes)],
  exports: [RouterModule]
})

export class AboutRoutingModule { }
