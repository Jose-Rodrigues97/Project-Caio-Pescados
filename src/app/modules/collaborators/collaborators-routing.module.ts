import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';
import { CollaboratorsComponent } from './collaborators.component';
import { CollaboratorDetailComponent } from './components/collaborator-detail/collaborator-detail.component';

const collaboratorsRoutes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      { path: '', redirectTo: 'collaborators', pathMatch: 'full' },
      { path: 'collaborators', component: CollaboratorsComponent },
      { path: 'collaboratorDetail/:id', component: CollaboratorDetailComponent },
      // { path: '**', component: CollaboratorsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(collaboratorsRoutes)],
  exports: [RouterModule]
})
export class CollaboratorsRoutingModule { }
