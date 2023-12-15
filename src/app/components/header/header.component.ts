import { Component } from '@angular/core';
import { faUserCircle, faPowerOff, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUserCircle = faUserCircle;
  faPowerOff = faPowerOff;
  faCogs = faCogs;

  ngOnInit(): void {
    if (window.innerWidth > document.body.clientWidth) {
      document.getElementsByTagName('header')[0].style.width = 'calc(100vw - 15px)';
    }
  }
}
