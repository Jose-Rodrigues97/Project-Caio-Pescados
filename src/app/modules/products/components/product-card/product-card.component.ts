import { Component, Input } from '@angular/core';
import { faMoneyBillWave, faDolly } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../models/product-model';

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
