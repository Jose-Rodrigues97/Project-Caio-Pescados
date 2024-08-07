import { Component, Input } from '@angular/core';
import { faUserCircle, faPowerOff, faCogs, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUserCircle = faUserCircle;
  faPowerOff = faPowerOff;
  faCogs = faCogs;
  faArrowTurnDown = faArrowTurnDown;
  @Input() name!: String;
  @Input() image!: Blob;

  constructor() {
  }

  onChangeActive() {
    let desactiveMenu = document.getElementsByClassName('active');
    for (let index = 0; index < desactiveMenu.length; index++) {
      desactiveMenu[index].classList.remove('active')
    }
    document.getElementById('10')?.classList.add('active');
  }

  onExitAccount() {
    localStorage.removeItem('Token');
  }
}
