import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent {
  @Input() id!: number;
  formGroup!: FormGroup;
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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      cnpj: '',
      stateRegistration:'',
      branch: '',
      street: '',
      numberStreet: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      nameUser: '',
      telephone: '',
      email: ''
    })
  }
}
