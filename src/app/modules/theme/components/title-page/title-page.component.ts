import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../models/button';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})

export class TitlePageComponent {
  faShare = faShare;
  @Input() pageName!: string;
  @Input() buttons!: Button[];

  constructor(private router: Router) {

  }

  onNavigate(link: string) {
    this.router.navigateByUrl(link);
  }
}
