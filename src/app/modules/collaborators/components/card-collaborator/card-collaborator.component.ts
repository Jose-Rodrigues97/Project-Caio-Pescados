import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-collaborator',
  templateUrl: './card-collaborator.component.html',
  styleUrls: ['./card-collaborator.component.css']
})
export class CardCollaboratorComponent {
  @Input() name!: string;
  @Input() isHeadquarters!: boolean;
  @Input() taxNumber!: number;
  @Input() address!: string;
  @Input() phone!: number;
  @Input() email!: string;
  @Input() state!: string;
  @Input() city!: string;
  @Input() image!: string;
}
