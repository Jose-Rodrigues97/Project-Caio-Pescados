import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-company-card',
  templateUrl: './shipping-company-card.component.html',
  styleUrls: ['./shipping-company-card.component.css']
})
export class ShippingCompanyCardComponent {
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
