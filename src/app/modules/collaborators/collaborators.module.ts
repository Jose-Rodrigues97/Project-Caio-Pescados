import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardCollaboratorComponent } from './components/card-collaborator/card-collaborator.component';
import { CollaboratorsComponent } from './collaborators.component';
import { CollaboratorDetailComponent } from './components/collaborator-detail/collaborator-detail.component';
import { RouterModule } from '@angular/router';
import { CollaboratorsRoutingModule } from './collaborators-routing.module';



@NgModule({
  declarations: [
    CollaboratorsComponent,
    CardCollaboratorComponent,
    CollaboratorDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    FontAwesomeModule,
    RouterModule,
    CollaboratorsRoutingModule
  ]
})
export class CollaboratorsModule { }
