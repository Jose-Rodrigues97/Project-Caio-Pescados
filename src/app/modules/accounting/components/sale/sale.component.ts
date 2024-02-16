import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  buttons = [
    {
      name: 'CRIAR PEDIDO DE VENDA',
      link: '/saleDetail/',
      class: 'btn-primary'
    }]
  estates = {} as EstateModel[];
  cities$!: Observable<CityModel[]>;
  formGroup!: FormGroup;
  faShare = faShare;
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
