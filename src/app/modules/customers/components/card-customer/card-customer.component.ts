import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.css']
})
export class CardCustomerComponent {
  @Input() name!: string;
  @Input() isHeadquarters!: boolean;
  @Input() taxNumber!: number;
  @Input() address!: string;
  @Input() phone!: number;
  @Input() email!: string;
  @Input() state!: string;
  @Input() city!: string;
  @Input() image!: string;
}
