import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';
import { IconDefinition, faPlusCircle, faShare } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomersModel } from '../../models/customers-model';
import { CustomerService } from '../../services/customer.service';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent {
  faPlus = faPlusCircle;
  buttons = [
    {
      name: 'CRIAR CLIENTE',
      link: '/customer/customerDetail/',
      class: 'btn-primary',
      iconButton: faPlusCircle,
      type: 'CREATE'
    }]
  estates = {} as EstateModel[];
  cities$!: Observable<CityModel[]>;
  formGroup!: FormGroup;
  faShare = faShare;
  customers$!: Observable<CustomersModel>;
  bsModalRef?: BsModalRef;


  constructor(private customerService: CustomerService,
    private estateService: EstateService,
    private citiesService: CityService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCustomers();
    this.getEstates();
    this.formGroup = this.formBuilder.group({
      text: '',
      estate: '',
      city: ''
    })
  }

  onSubmit() {

  }

  getCustomers() {
    this.customers$ = this.customerService.getCustomers();
  }

  onClean() {
    this.formGroup.reset();
    this.cities$ = new Observable<[]>();
  }

  changeUF() {
    this.getCities();
    this.formGroup.value.city = "";
  }

  getEstates() {
    this.estateService.getUFs().subscribe((estates: EstateModel[]) => {
      this.estates = estates;
    },
      error => {
        this.handleModal('danger', error);
      }
    );
  }

  getCities() {
    this.cities$ = this.citiesService.getCitiesByUF(this.formGroup.value.estate);
  };

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
