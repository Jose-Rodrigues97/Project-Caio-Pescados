import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from '../themes/themes.component';
import { CollaboratorsComponent } from './collaborators.component';
import { CollaboratorDetailComponent } from './components/collaborator-detail/collaborator-detail.component';

const collaboratorsRoutes: Routes = [
  {
    path: '',
    component: ThemesComponent,
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
