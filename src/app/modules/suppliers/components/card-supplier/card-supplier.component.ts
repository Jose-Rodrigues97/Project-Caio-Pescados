import { Component, Input } from '@angular/core';
import { SupplierModel } from '../../models/supplier-model';

@Component({
  selector: 'app-card-supplier',
  templateUrl: './card-supplier.component.html',
  styleUrls: ['./card-supplier.component.css']
})
export class CardSupplierComponent {
  @Input() supplier!:SupplierModel;
}
