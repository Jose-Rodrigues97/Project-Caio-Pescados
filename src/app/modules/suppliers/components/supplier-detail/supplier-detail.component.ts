import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent {
  buttons = [
  {
    name: 'VOLTAR',
    link: '/suppliers',
    class: 'btn-secondary'
  },
  {
    name: 'SALVAR',
    link: '/supplierDetail/',
    class: 'btn-primary'
  }]
  @Input() id!: number;
  @Input() name!: string;
  @Input() CNPJ!: string;
  @Input() telephone!: number;
  @Input() email!: string;
  @Input() image!: string;
}
