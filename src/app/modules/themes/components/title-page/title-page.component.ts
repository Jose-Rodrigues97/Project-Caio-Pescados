import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() clickButton: EventEmitter<Boolean> = new EventEmitter();

  constructor(private router: Router) {

  }

  onClickButton(link: string) {
    if (link == '') {
      this.clickButton.emit(true);
      return;
    }
    this.router.navigateByUrl(link);
  }
}
