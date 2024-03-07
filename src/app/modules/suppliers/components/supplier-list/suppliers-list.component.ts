import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';


@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class ListSuppliersComponent {
  buttons = [
    {
      name: 'CRIAR FORNECEDOR',
      link: 'suppliers/supplierDetail/',
      class: 'btn-primary'
    }]
    estates = {} as EstateModel[];
    cities$!: Observable<CityModel[]>;
    formGroup!: FormGroup;

    suppliers = [
      { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", telephone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", CNPJ: "65181611616161" },
      { id: 2, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", telephone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", CNPJ: "65181611616161" },
    ]

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

    onSubmit(): void {

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