import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})

export class LayoutPageComponent {
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
