import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal-component',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent {
  @Input() message: string = '';
  @Input() type: string = '';
  svg!: string;

  constructor(public bsModalRef: BsModalRef) {
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
