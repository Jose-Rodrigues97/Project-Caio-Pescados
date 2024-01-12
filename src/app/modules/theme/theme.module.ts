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
import { UploadComponent } from './components/upload/upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InternalErrorComponent } from './components/internal-error/internal-error.component';


@NgModule({
  declarations: [
    ContentAreaComponent,
    HeaderComponent,
    PaginationComponent,
    SidebarComponent,
    ThemeComponent,
    TitlePageComponent,
    UploadComponent,
    PageNotFoundComponent,
    InternalErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    PaginationComponent,
    TitlePageComponent,
    UploadComponent
  ]
})
export class ThemeModule { }
