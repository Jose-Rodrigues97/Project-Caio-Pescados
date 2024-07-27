import { Component, Input } from '@angular/core';
import { SaleModel } from '../../models/sale-model';

@Component({
  selector: 'app-card-sale',
  templateUrl: './card-sale.component.html',
  styleUrls: ['./card-sale.component.css']
})
export class CardSaleComponent {
  @Input() sale!: SaleModel;
}
