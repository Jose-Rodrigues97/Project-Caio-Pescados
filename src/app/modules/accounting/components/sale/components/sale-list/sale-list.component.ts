import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconDefinition, faPlusCircle, faShare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';
import { SalesModel } from '../../models/sales-model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent {
  buttons = [
    {
      name: 'CRIAR PEDIDO DE VENDA',
      link: '/saleDetail/',
      class: 'btn-primary',
      iconButton: faPlusCircle,
      type: 'CREATE'
    }]
  estates = {} as EstateModel[];
  cities$!: Observable<CityModel[]>;
  formGroup!: FormGroup;
  faShare = faShare;
  sales$!: Observable<SalesModel>;


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
