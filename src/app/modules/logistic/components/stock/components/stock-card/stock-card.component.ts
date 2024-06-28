import { Component, Input } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Companyv2Model } from 'src/app/modules/companies/models/company-card-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {
  @Input() company!: Companyv2Model;
  faBuilding = faBuilding;
}
