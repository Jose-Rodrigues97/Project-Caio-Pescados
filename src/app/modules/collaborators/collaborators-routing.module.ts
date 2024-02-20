import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorsComponent } from './collaborators.component';
import { CollaboratorDetailComponent } from './components/collaborator-detail/collaborator-detail.component';
import { ListCollaboratorsComponent } from './components/list-collaborators/list-collaborators.component';
import { PageNotFoundComponent } from '../themes/components/page-not-found/page-not-found.component';

const collaboratorsRoutes: Routes = [
  {
    path: 'collaborator',
    component: CollaboratorsComponent,
    children: [
      { path: '', redirectTo: 'collaboratorsList', pathMatch: 'full' },
      { path: 'collaboratorsList', component: ListCollaboratorsComponent },
      { path: 'collaboratorDetail/:id', component: CollaboratorDetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(collaboratorsRoutes)],
  exports: [RouterModule]
})
export class CollaboratorsRoutingModule { }
