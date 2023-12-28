import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ThemeComponent } from './theme.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitlePageComponent } from './components/title-page/title-page.component';


@NgModule({
  declarations: [
    ContentAreaComponent,
    HeaderComponent,
    PaginationComponent,
    SidebarComponent,
    ThemeComponent,
    TitlePageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    PaginationComponent,
    TitlePageComponent
  ]
})
export class ThemeModule { }
