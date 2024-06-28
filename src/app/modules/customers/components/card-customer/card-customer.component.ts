import { Component, Input } from '@angular/core';
import { CustomerModel } from '../../models/customer-model';

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.css']
})
export class CardCustomerComponent {
  @Input() customer!: CustomerModel;
}
