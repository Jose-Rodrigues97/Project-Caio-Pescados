import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesModule } from '../themes/themes.module';
import { ConfigurationComponent } from './configuration.component';
import { CardConfigurationComponent } from './components/card-configuration/card-configuration.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    ConfigurationComponent,
    CardConfigurationComponent,
    PermissionsComponent,
    ThemeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ThemesModule,
    FontAwesomeModule,
    RouterModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
