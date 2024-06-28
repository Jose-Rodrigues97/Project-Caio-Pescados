import { Component, Input } from '@angular/core';
import { CollaboratorModel } from '../../models/collaborator-model';

@Component({
  selector: 'app-card-collaborator',
  templateUrl: './card-collaborator.component.html',
  styleUrls: ['./card-collaborator.component.css']
})
export class CardCollaboratorComponent {
  @Input() collaboratorModel!: CollaboratorModel;
}
