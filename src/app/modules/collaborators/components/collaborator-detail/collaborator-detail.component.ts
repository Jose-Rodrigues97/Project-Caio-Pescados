import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
    link: '/collaborator/collaboratorsList',
    class: 'btn-secondary',
    iconButton: {} as IconDefinition,
    type: 'RETURN'
  },
  {
    name: 'SALVAR',
    link: '/collaborators',
    class: 'btn-primary',
    iconButton: {} as IconDefinition,
    type: 'SAVE'
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
