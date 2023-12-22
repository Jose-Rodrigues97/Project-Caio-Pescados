import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstatesService } from 'src/app/services/estate/estate.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  estates = {} as EstateModel[];
  cities = {} as CityModel[];
  formGroup!: FormGroup;

  companies = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", isHeadquarters: true, phone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", taxNumber: 65181611616161, address: "Rua Qualquer" },
    { id: 2, image: "", name: "Caio Pescado", isHeadquarters: false, phone: 75757425425, email: "caio@gmail.com", state: "RS", city: "Alvorada", taxNumber: 676575467575747, address: "Rua Frederico Dhill" },
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", isHeadquarters: true, phone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", taxNumber: 65181611616161, address: "Rua Qualquer" },
    { id: 2, image: "", name: "Caio Pescado", isHeadquarters: false, phone: 75757425425, email: "caio@gmail.com", state: "RS", city: "Alvorada", taxNumber: 676575467575747, address: "Rua Frederico Dhill" },
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", isHeadquarters: true, phone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", taxNumber: 65181611616161, address: "Rua Qualquer" },
    { id: 2, image: "", name: "Caio Pescado", isHeadquarters: false, phone: 75757425425, email: "caio@gmail.com", state: "RS", city: "Alvorada", taxNumber: 676575467575747, address: "Rua Frederico Dhill" },
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", isHeadquarters: true, phone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", taxNumber: 65181611616161, address: "Rua Qualquer" },
    { id: 2, image: "", name: "Caio Pescado", isHeadquarters: false, phone: 75757425425, email: "caio@gmail.com", state: "RS", city: "Alvorada", taxNumber: 676575467575747, address: "Rua Frederico Dhill" },
  ]

  constructor(private estatesService: EstatesService,
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
  }

  getEstates() {
    this.estatesService.getUFs().subscribe((estates: EstateModel[]) => {
      this.estates = estates;
    });
  }

  getCities() {
    this.citiesService.getCitiesByUF(this.formGroup.value.estate).subscribe((cities: CityModel[]) => {
      this.cities = cities;
    });
  }

  changeUF() {
    this.formGroup.value.city = "";
    this.getCities();
  }
}