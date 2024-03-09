import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faShare } from '@fortawesome/free-solid-svg-icons';
import { ButtonModel } from '../../models/button-model';



@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})

export class TitlePageComponent {
  faShare = faShare;
  @Input() pageName!: string;
  @Input() iconButton!: IconDefinition;
  @Input() buttons!: ButtonModel[];
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
