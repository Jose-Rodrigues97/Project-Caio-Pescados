import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupplierModel } from '../../models/supplier-model';
import { TransportModel } from 'src/app/modules/accounting/models/transport-model';
import { ShippingCompanyModel } from 'src/app/modules/accounting/models/shipping-company-model';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent {
  @Input() id!: number;
  formGroup!: FormGroup;
  buttons = [
    {
      name: 'VOLTAR',
      link: '/purchase',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    },
    {
      name: 'SALVAR',
      link: '/purchase/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }]

  suppliers = {} as SupplierModel[];
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

