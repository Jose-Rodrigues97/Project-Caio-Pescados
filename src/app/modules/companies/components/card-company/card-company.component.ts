import { Component, Input } from '@angular/core';
import { Companyv2Model } from '../../models/companyv2-model';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.css']
})
export class CardCompanyComponent {
  @Input() company!: Companyv2Model;
  faBuilding = faBuilding;
}
