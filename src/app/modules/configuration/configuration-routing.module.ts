import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemeComponent } from './components/theme/theme.component';
import { ConfigurationComponent } from './configuration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';
import { ListConfigurationsComponent } from './components/list-configurations/list-configurations.component';

const configurationRoutes: Routes = [
  {
    path: 'configuration',
    component: ConfigurationComponent,
    children: [
      { path: '', redirectTo: 'configuration', pathMatch: 'full' },
      { path: 'configuration', component: ListConfigurationsComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'permissions/:id', component: PermissionsComponent },
      { path: 'theme/:id', component: ThemeComponent },
      { path: '**', component: PageNotFoundComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(configurationRoutes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
