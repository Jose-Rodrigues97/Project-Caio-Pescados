import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardCollaboratorComponent } from './components/card-collaborator/card-collaborator.component';
import { CollaboratorsComponent } from './collaborators.component';



@NgModule({
  declarations: [
    CollaboratorsComponent,
    CardCollaboratorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    FontAwesomeModule
  ]
})
export class CollaboratorsModule { }
