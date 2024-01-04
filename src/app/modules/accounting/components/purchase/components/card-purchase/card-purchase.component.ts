import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-purchase',
  templateUrl: './card-purchase.component.html',
  styleUrls: ['./card-purchase.component.css']
})
export class CardPurchaseComponent {
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
