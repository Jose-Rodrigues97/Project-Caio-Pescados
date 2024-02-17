import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-collaborator-detail',
  templateUrl: './collaborator-detail.component.html',
  styleUrls: ['./collaborator-detail.component.css']
})
export class CollaboratorDetailComponent {
  @Input() id!: number;
  formGroup!: FormGroup;
  buttons = [{
    name: 'VOLTAR',
    link: '/collaborators',
    class: 'btn-secondary'
  },
  {
    name: 'SALVAR',
    link: '/collaborators',
    class: 'btn-primary'
  }]

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      surname: '',
      rg: '',
      cpf: '',
      dateBirth: '',
      street: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      homePhone: '',
      cellPhone: '',
      email: '',
      office: '',
      salary: '',
      turn: '',
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
