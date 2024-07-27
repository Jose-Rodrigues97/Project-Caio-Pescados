import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city-model';
import { EstateModel } from 'src/app/models/estate-model';
import { CityService } from 'src/app/services/city/city.service';
import { EstateService } from 'src/app/services/estate/estate.service';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CompanyService } from '../../services/company.service';
import { CompaniesModel } from '../../models/companies-model';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  buttons = [
    {
      name: 'CRIAR EMPRESA',
      link: 'company/companyDetail/',
      class: 'btn-primary',
      iconButton: faPlusCircle,
      type: 'CREATE'
    }]
  estates = {} as EstateModel[];
  cities$!: Observable<CityModel[]>;
  formGroup!: FormGroup;
  faShare = faShare;
  companies$!: Observable<CompaniesModel>;
  bsModalRef?: BsModalRef;

  constructor(private companyService: CompanyService,
    private estateService: EstateService,
    private citiesService: CityService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCompanies();
    this.getEstates();
    this.formGroup = this.formBuilder.group({
      text: '',
      estate: '',
      city: ''
    })
  }

  onSubmit() {

  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  onClean() {
    this.formGroup.reset();
    this.cities$ = new Observable<[]>();
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

  changeUF() {
    this.getCities();
    this.formGroup.value.city = "";
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
