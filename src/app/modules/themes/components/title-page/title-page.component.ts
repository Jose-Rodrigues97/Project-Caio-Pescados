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
  @Input() buttons!: ButtonModel[];
  @Output() clickButton: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  onClickButton(button: ButtonModel) {
    if (button.type == 'RETURN' || button.type == 'CREATE') {
      this.router.navigateByUrl(button.link);
    } else{
      this.clickButton.emit(button.type);
      return;
    }
  }
}
