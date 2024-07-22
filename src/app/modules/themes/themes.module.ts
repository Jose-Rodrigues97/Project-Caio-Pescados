import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemesComponent } from './themes.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { UploadComponent } from './components/upload/upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InternalErrorComponent } from './components/internal-error/internal-error.component';
import { AlertModalComponent } from './components/alert-modal-component/alert-modal.component';
import { SppinerComponent } from './components/sppiner/sppiner.component';
import { PopupModalComponent } from '../authentication/components/popup-modal/popup-modal-component';

@NgModule({
  declarations: [
    ContentAreaComponent,
    HeaderComponent,
    PaginationComponent,
    SidebarComponent,
    ThemesComponent,
    TitlePageComponent,
    UploadComponent,
    PageNotFoundComponent,
    InternalErrorComponent,
    AlertModalComponent,
    SppinerComponent,
    PopupModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    ThemesComponent,
    PaginationComponent,
    TitlePageComponent,
    UploadComponent,
    AlertModalComponent,
    SppinerComponent
  ]
})

export class ThemesModule { }