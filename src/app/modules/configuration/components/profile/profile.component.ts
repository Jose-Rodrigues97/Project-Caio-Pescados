import { Component } from '@angular/core';

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
      class: 'btn-secondary'
    }
  ]
}
