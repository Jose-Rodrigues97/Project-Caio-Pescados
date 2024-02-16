import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-sale',
  templateUrl: './card-sale.component.html',
  styleUrls: ['./card-sale.component.css']
})
export class CardSaleComponent {
  @Input() id!: number;
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
