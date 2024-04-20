import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  buttons = [
    {
      name: 'Voltar',
      link: '/configuration',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    }
  ]
}
