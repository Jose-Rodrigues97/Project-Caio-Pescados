import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup-modal-component',
  templateUrl: './popup-modal-component.html',
  styleUrls: ['./popup-modal-component.css']
})
export class PopupModalComponent {
  svg!: string;

  constructor(public bsModalRef: BsModalRef) {
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
