import { Component } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {
  buttons = [
    {
      name: 'Voltar',
      link: '/configuration',
      class: 'btn-secondary'
    }
  ]
}
