import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})

export class TitlePageComponent {
  faShare = faShare;
  @Input() pageName!: string;
  @Input() buttonName!: string;
  @Input() buttonLink!: string;

  constructor(private router: Router) {

  }

  onNavigate() {
    this.router.navigateByUrl(this.buttonLink)
  }
}
