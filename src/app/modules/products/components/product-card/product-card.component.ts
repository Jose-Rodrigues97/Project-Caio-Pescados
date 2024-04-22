import { Component, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { faMoneyBillWave, faDolly } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-card-product',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class CardProductComponent {
  @Input() product!:ProductModel;
  faDolly = faDolly;
  faMoneyBillWave = faMoneyBillWave;
}
