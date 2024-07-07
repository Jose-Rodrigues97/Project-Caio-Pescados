import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconDefinition, faShare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class ListPurchaseComponent {
  buttons = [
    {
      name: 'CRIAR PEDIDO DE COMPRA',
      link: 'purchase/purchaseDetail/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'CREATE'
    }]

  formGroup!: FormGroup;
  faShare = faShare;

  constructor(
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
    })
  }

  onSubmit(): void {

  }

}
