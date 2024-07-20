import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ThemesModule } from '../themes/themes.module';
import { DetailsComponent } from './components/details/details.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ThemesModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
