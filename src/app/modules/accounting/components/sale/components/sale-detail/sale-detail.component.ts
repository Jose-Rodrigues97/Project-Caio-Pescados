import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientModel } from '../../models/client-model';
import { ShippingCompanyModel } from 'src/app/modules/accounting/models/shipping-company-model';
import { TransportModel } from 'src/app/modules/accounting/models/transport-model';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent {
  @Input() id!: number;
  formGroup!: FormGroup;
  buttons = [
    {
      name: 'VOLTAR',
      link: '/sale',
      class: 'btn-secondary'
    },
    {
      name: 'SALVAR',
      link: '/saleDetail/',
      class: 'btn-primary'
    }]

    suppliers = {} as ClientModel[];
    transports = {} as TransportModel[];
    shippingCompanys = {} as ShippingCompanyModel[];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      taxNumber: '',
      corporateReason: '',
      cnae: '',
      stateRegistration: '',
      creationDate: '',
      situationRevenue: '',
      street: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      homePhone: '',
      cellPhone: '',
      email: '',
      TotalCollaborators: '',
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sundayStart: '',
      mondayStart: '',
      tuesdayStart: '',
      wednesdayStart: '',
      thursdayStart: '',
      fridayStart: '',
      saturdayStart: '',
      sundayEnd: '',
      mondayEnd: '',
      tuesdayEnd: '',
      wednesdayEnd: '',
      thursdayEnd: '',
      fridayEnd: '',
      saturdayEnd: '',
    })
  }

  onClickButton(){
    this.saveCompetition(this.formGroup.value);
  }

  saveCompetition(formGroup: FormGroup) {
   
  };
}