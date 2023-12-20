import { Component, Input } from '@angular/core';
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
  UFSelected: string = '';
  CitySelected: string = '';

  companies = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", isHeadquarters: true, phone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", taxNumber: 65181611616161, address: "Rua Qualquer" },
    { id: 2, image: "", name: "Caio Pescado", isHeadquarters: false, phone: 75757425425, email: "caio@gmail.com", state: "RS", city: "Alvorada", taxNumber: 676575467575747, address: "Rua Frederico Dhill" },
  ]

  constructor(private estatesService: EstatesService,
    private citiesService: CityService) {
  }

  ngOnInit() {
    this.getEstates();
  }

  getEstates() {
    this.estatesService.getUFs().subscribe((estates: EstateModel[]) => {
      this.estates = estates;
    });
  }

  getCities() {
    this.citiesService.getCitiesByUF(this.UFSelected).subscribe((cities: CityModel[]) => {
      this.cities = cities;
    });
  }

  changeUF() {
    this.CitySelected = "";
    this.getCities();
  }
}