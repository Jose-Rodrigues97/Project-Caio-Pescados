import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // { path: '**', component: PageNotFoundComponentComponent }
    ],
    // canActivate: [AuthGuard]
  }
  // },
  // {
  //   path: '',
  //   component: AuthenticationComponentComponent,
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //     { path: 'login', component: LoginComponentComponent },
  //     { path: 'cadastro', component: RegisterComponentComponent }
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
