import { Component } from '@angular/core';
import { faDesktop, faFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  faDesktop = faDesktop;
  faFrown = faFrown;
}
