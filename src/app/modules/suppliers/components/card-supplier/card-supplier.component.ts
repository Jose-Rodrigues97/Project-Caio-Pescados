import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-supplier',
  templateUrl: './card-supplier.component.html',
  styleUrls: ['./card-supplier.component.css']
})
export class CardSupplierComponent {
  @Input() name!: string;
  @Input() CNPJ!: string;
  @Input() telephone!: number;
  @Input() email!: string;
  @Input() image!: string;
  @Input() city!: string;
  @Input() state!: string;
}
