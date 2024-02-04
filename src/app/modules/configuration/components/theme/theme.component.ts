import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  buttons = [
    {
      name: 'Voltar',
      link: '/configuration',
      class: 'btn-secondary'
    }
  ]
}
