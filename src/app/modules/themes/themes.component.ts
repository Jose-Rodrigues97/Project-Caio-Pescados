import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})

export class ThemesComponent {
  @Input() menuId! : string;
}
