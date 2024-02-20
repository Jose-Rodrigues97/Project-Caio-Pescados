import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemesModule } from '../themes/themes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardCollaboratorComponent } from './components/card-collaborator/card-collaborator.component';
import { CollaboratorsComponent } from './collaborators.component';
import { CollaboratorDetailComponent } from './components/collaborator-detail/collaborator-detail.component';
import { RouterModule } from '@angular/router';
import { CollaboratorsRoutingModule } from './collaborators-routing.module';
import { ListCollaboratorsComponent } from './components/list-collaborators/list-collaborators.component';



@NgModule({
  declarations: [
    CollaboratorsComponent,
    CardCollaboratorComponent,
    CollaboratorDetailComponent,
    ListCollaboratorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemesModule,
    FontAwesomeModule,
    RouterModule,
    CollaboratorsRoutingModule
  ]
})
export class CollaboratorsModule { }
