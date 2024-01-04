import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { ConfigurationComponent } from './configuration.component';



@NgModule({
  declarations: [
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ]
})
export class ConfigurationModule { }
