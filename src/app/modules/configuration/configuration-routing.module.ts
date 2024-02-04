import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemeComponent } from './components/theme/theme.component';
import { ConfigurationComponent } from './configuration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ThemesComponent } from '../themes/themes.component';

const configurationRoutes: Routes = [
  {
    path: '',
    component: ThemesComponent,
    children: [
      { path: '', redirectTo: 'configuration', pathMatch: 'full' },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'permissions/:id', component: PermissionsComponent },
      { path: 'theme/:id', component: ThemeComponent },
      // { path: '**', component: CompaniesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(configurationRoutes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
