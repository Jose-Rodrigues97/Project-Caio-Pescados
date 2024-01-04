import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {
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
