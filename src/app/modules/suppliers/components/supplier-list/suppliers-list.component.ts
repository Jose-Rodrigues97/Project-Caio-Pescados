import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';
import { SuppliersModel } from '../../models/suppliers-model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SupplierService } from '../../services/supplier.service';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class ListSuppliersComponent {
  buttons = [
    {
      name: 'CRIAR FORNECEDOR',
      link: 'supplier/supplierDetail/',
      class: 'btn-primary'
    }]
  estates = {} as EstateModel[];
  cities$!: Observable<CityModel[]>;
  formGroup!: FormGroup;
  suppliers$!: Observable<SuppliersModel>
  bsModalRef?: BsModalRef;
  faPlus = faPlusCircle;
  faShare = faShare;

  constructor(
    private supplierService: SupplierService,
    private estateService: EstateService,
    private citiesService: CityService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getSuppliers();
    this.getEstates();
    this.formGroup = this.formBuilder.group({
      text: '',
      estate: '',
      city: ''
    })
  }

  onSubmit(): void {

  }

  getSuppliers() {

    this.suppliers$ = this.supplierService.getSuppliers();

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
