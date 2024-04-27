import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconDefinition, faShare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-list-collaborators',
  templateUrl: './list-collaborators.component.html',
  styleUrls: ['./list-collaborators.component.css']
})
export class ListCollaboratorsComponent {
  faPlus = faPlusCircle;
  buttons = [
    {
      name: 'CRIAR COLABORADOR',
      link: 'company/collaboratorDetail/',
      class: 'btn-primary',
      iconButton: faPlusCircle,
      type: 'CREATE'
    }]
  estates = {} as EstateModel[];
  cities$!: Observable<CityModel[]>;
  formGroup!: FormGroup;
  faShare = faShare;
  collaborators$!: Observable<UserModel>;
  constructor(private estateService: EstateService,
    private citiesService: CityService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getEstates();
    this.formGroup = this.formBuilder.group({
      text: '',
      estate: '',
      city: ''
    })
  }

  ngOnSubmit(): void {

  }

  onClean() {
    this.formGroup.reset();
    this.cities$ = new Observable<[]>();
  }

  getEstates() {
    this.estateService.getUFs().subscribe((estates: EstateModel[]) => {
      this.estates = estates;
    });
  }

  getCities() {
    this.cities$ = this.citiesService.getCitiesByUF(this.formGroup.value.estate);
  };

  changeUF() {
    this.getCities();
    this.formGroup.value.city = "";
  }

}