import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {

  @Input() id!: number;
  formGroup!: FormGroup;
  buttons = [
    {
      name: 'VOLTAR',
      link: 'customer/customersList',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    },
    {
      name: 'SALVAR',
      link: '/customerDetail/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }]

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