import { Component, Input, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { ProductStockModel } from '../../models/product-stock-model';

@Component({
  selector: 'app-product-stock-card',
  templateUrl: './product-stock-card.component.html',
  styleUrls: ['./product-stock-card.component.css']
})
export class ProductStockCardComponent {
  @Input() productStock!: ProductStockModel;
  faBuilding = faBuilding;
}
