import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { CompanyModel } from '../../models/company-model';
import { Companyv3Model } from '../../models/companyv3-model';
import { TelephoneModel } from '../../models/telephone-model';
import { CompanyExtModel } from '../../models/company-ext-model';
import { CompanyAddressModel } from '../../models/company-address-model';
import { ErrorModel } from 'src/app/models/error/error-model';
import { properties } from '../../module property/properties';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  @Input() companyId: number = 0;
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
  submitted: boolean = false;
  image!: Blob;
  isShowPanelOpeningHours = properties.isShowPanelOpeningHours;
  buttons = [
    {
      name: 'VOLTAR',
      link: '/company/companiesList',
      class: 'btn-secondary'
    },
    {
      name: 'SALVAR',
      link: '',
      class: 'btn-primary'
    }]

  constructor(private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private modalService: BsModalService,
    private router: Router) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.companyId = Number(s.path);
    this.formGroup = this.formBuilder.group({
      id: this.companyId,
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      taxNumber: new FormControl('', [Validators.required, Validators.minLength(14)]),
      corporateReason: '',
      cnae: '',
      stateRegistration: '',
      creationDate: '',
      situationRevenue: '',
      isHeadquarters: false,
      address: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      image: Blob,
      homePhone: '',
      cellPhone: '',
      email: new FormControl('', [Validators.required, Validators.email]),
      totalCollaborators: '',
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sundayStart: { value: '', disabled: true },
      mondayStart: { value: '', disabled: true },
      tuesdayStart: { value: '', disabled: true },
      wednesdayStart: { value: '', disabled: true },
      thursdayStart: { value: '', disabled: true },
      fridayStart: { value: '', disabled: true },
      saturdayStart: { value: '', disabled: true },
      sundayEnd: { value: '', disabled: true },
      mondayEnd: { value: '', disabled: true },
      tuesdayEnd: { value: '', disabled: true },
      wednesdayEnd: { value: '', disabled: true },
      thursdayEnd: { value: '', disabled: true },
      fridayEnd: { value: '', disabled: true },
      saturdayEnd: { value: '', disabled: true },
    });
  }

  ngOnInit() {
    if (this.formGroup.get('id')?.value !== 0) {
      this.getCompanyById(this.formGroup.get('id')?.value);
    }
  }

  get name() {
    return this.formGroup.get("name")!;
  }

  get email() {
    return this.formGroup.get("email")!;
  }

  get taxNumber() {
    return this.formGroup.get("taxNumber")!;
  }

  onChangeWorkingDay(event: Event) {
    const ischecked = (<HTMLInputElement>event.target).checked;
    const day = (<HTMLInputElement>event.target).id;

    switch (day) {
      case 'sunday':
        if (ischecked) {
          this.formGroup.get('sundayStart')?.enable();
          this.formGroup.get('sundayEnd')?.enable();
        } else {
          this.formGroup.get('sundayStart')?.disable();
          this.formGroup.get('sundayStart')?.setValue({ value: '' });
          this.formGroup.get('sundayEnd')!.disable();
          this.formGroup.get('sundayEnd')?.setValue({ value: '' });
        }
        break;
      case 'monday':
        if (ischecked) {
          this.formGroup.get('mondayStart')?.enable();
          this.formGroup.get('mondayEnd')?.enable();
        } else {
          this.formGroup.get('mondayStart')?.disable();
          this.formGroup.get('mondayStart')?.setValue({ value: '' });
          this.formGroup.get('mondayEnd')!.disable();
          this.formGroup.get('mondayEnd')?.setValue({ value: '' });
        }
        break;
      case 'tuesday':
        if (ischecked) {
          this.formGroup.get('tuesdayStart')?.enable();
          this.formGroup.get('tuesdayEnd')?.enable();
        } else {
          this.formGroup.get('tuesdayStart')?.disable();
          this.formGroup.get('tuesdayStart')?.setValue({ value: '' });
          this.formGroup.get('tuesdayEnd')!.disable();
          this.formGroup.get('tuesdayEnd')?.setValue({ value: '' });
        }
        break;
      case 'wednesday':
        if (ischecked) {
          this.formGroup.get('wednesdayStart')?.enable();
          this.formGroup.get('wednesdayEnd')?.enable();
        } else {
          this.formGroup.get('wednesdayStart')?.disable();
          this.formGroup.get('wednesdayStart')?.setValue({ value: '' });
          this.formGroup.get('wednesdayEnd')!.disable();
          this.formGroup.get('wednesdayEnd')?.setValue({ value: '' });
        }
        break;
      case 'thursday':
        if (ischecked) {
          this.formGroup.get('thursdayStart')?.enable();
          this.formGroup.get('thursdayEnd')?.enable();
        } else {
          this.formGroup.get('thursdayStart')?.disable();
          this.formGroup.get('thursdayStart')?.setValue({ value: '' });
          this.formGroup.get('thursdayEnd')!.disable();
          this.formGroup.get('thursdayEnd')?.setValue({ value: '' });
        }
        break;
      case 'friday':
        if (ischecked) {
          this.formGroup.get('fridayStart')?.enable();
          this.formGroup.get('fridayEnd')?.enable();
        } else {
          this.formGroup.get('fridayStart')?.disable();
          this.formGroup.get('fridayStart')?.setValue({ value: '' });
          this.formGroup.get('fridayEnd')!.disable();
          this.formGroup.get('fridayEnd')?.setValue({ value: '' });
        }
        break;
      case 'saturday':
        if (ischecked) {
          this.formGroup.get('saturdayStart')?.enable();
          this.formGroup.get('saturdayEnd')?.enable();
        } else {
          this.formGroup.get('saturdayStart')?.disable();
          this.formGroup.get('saturdayStart')?.setValue({ value: '' });
          this.formGroup.get('saturdayEnd')!.disable();
          this.formGroup.get('saturdayEnd')?.setValue({ value: '' });
        }
        break;
      default:
        break;
    }
  }

  onClickButton() {
    this.ngOnSubmit();
  }

  ngOnSubmit() {
    try {
      this.submitted = true;
      if (this.formGroup.valid) {
        if (this.companyId == 0) {
          let companyModel = {} as CompanyModel;
          companyModel.corporateName = this.formGroup.get('name')?.value;
          companyModel.email = this.formGroup.get('email')?.value;
          companyModel.taxNumber = this.formGroup.get('taxNumber')?.value;
          let companyExtModel = {} as CompanyExtModel;
          companyExtModel.cnae = this.formGroup.get('cnae')?.value;
          companyExtModel.fantasyName = this.formGroup.get('corporateReason')?.value;
          companyExtModel.foundationDate = this.formGroup.get('creationDate')?.value;
          companyExtModel.revenueStatus = this.formGroup.get('situationRevenue')?.value;
          companyExtModel.stateRegistration = this.formGroup.get('stateRegistration')?.value;
          companyExtModel.totalCollaborators = this.formGroup.get('totalCollaborators')?.value;
          companyExtModel.isHeadquarters = this.formGroup.get('isHeadquarters')?.value;
          companyModel.companyExtension = companyExtModel;
          let companyAddressModel = {} as CompanyAddressModel;
          companyAddressModel.address = this.formGroup.get('address')?.value;
          companyAddressModel.cep = this.formGroup.get('zipCode')?.value;
          companyAddressModel.city = this.formGroup.get('city')?.value;
          companyAddressModel.complement = this.formGroup.get('complement')?.value;
          companyAddressModel.country = this.formGroup.get('country')?.value;
          companyAddressModel.estate = this.formGroup.get('estate')?.value;
          companyModel.address = companyAddressModel;
          let telephonesModel = [] as TelephoneModel[];
          if (this.formGroup.get('homePhone')?.value) {
            let telephoneModel = {} as TelephoneModel;
            telephoneModel.number = this.formGroup.get('homePhone')?.value;
            telephoneModel.prefix = Number(String(this.formGroup.get('homePhone')?.value).substring(0, 2));
            telephoneModel.type = 'HOME';
            telephonesModel.push(telephoneModel);
          }
          if (this.formGroup.get('cellPhone')?.value) {
            let telephoneModel = {} as TelephoneModel;
            telephoneModel.number = this.formGroup.get('cellPhone')?.value;
            telephoneModel.prefix = Number(String(this.formGroup.get('cellPhone')?.value).substring(0, 2));
            telephoneModel.type = 'CELL';
            telephonesModel.push(telephoneModel);
          }
          companyModel.telephones = telephonesModel;
          // companyModel.image.image = this.image;
          console.log(companyModel);
          this.companyService.createCompany(companyModel).subscribe(() => {
            this.handleModal('success', 'Empresa criada com sucesso.');
          },
            error => {
              let erro: ErrorModel;
              erro = error;
              this.handleModal('danger', erro.message);
            });
        }
        else {
          let companyv3Model = <Companyv3Model>{};
          companyv3Model.corporateName = this.formGroup.get('name')?.value;
          companyv3Model.email = this.formGroup.get('email')?.value;
          companyv3Model.taxNumber = this.formGroup.get('taxNumber')?.value;

          companyv3Model.address.address = this.formGroup.get('address')?.value;
          companyv3Model.address.cep = this.formGroup.get('zipCode')?.value;
          companyv3Model.address.city = this.formGroup.get('city')?.value;
          companyv3Model.address.complement = this.formGroup.get('complement')?.value;
          companyv3Model.address.country = this.formGroup.get('country')?.value;
          companyv3Model.address.estate = this.formGroup.get('estate')?.value;
          companyv3Model.address.addressId = this.formGroup.get('address')?.value;
          companyv3Model.address.objectId = this.formGroup.get('estate')?.value;
          companyv3Model.address.objectType = this.formGroup.get('estate')?.value;
          companyv3Model.address.creationDate = this.formGroup.get('estate')?.value;
          companyv3Model.address.updateDate = this.formGroup.get('estate')?.value;
          this.companyService.updateCompany(this.companyId, companyv3Model).subscribe(() => {
            this.handleModal('success', 'Empresa atualizada com sucesso.');
          });
        }
      } else {
        this.handleModal('danger', 'Formulário inválido.');
      }

    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  getCompanyById(companyId: number) {
    this.companyService.getCompanyById(companyId).subscribe((company: CompanyModel) => {
      this.formGroup.get('name')?.setValue(company.corporateName);
      this.formGroup.get('taxNumber')?.setValue(company.taxNumber);
      this.formGroup.get('email')?.setValue(company.email);
      this.formGroup.get('corporateReason')?.setValue(company.companyExtension.fantasyName);
      this.formGroup.get('cnae')?.setValue(company.companyExtension.cnae);
      this.formGroup.get('stateRegistration')?.setValue(company.companyExtension.stateRegistration);
      this.formGroup.get('creationDate')?.setValue(company.companyExtension.creationDate);
      this.formGroup.get('situationRevenue')?.setValue(company.companyExtension.revenueStatus);
      this.formGroup.get('totalCollaborators')?.setValue(company.companyExtension.totalCollaborators);
      this.formGroup.get('isHeadquarters')?.setValue(company.companyExtension.isHeadquarters);
      if (company.address) {
        this.formGroup.get('address')?.setValue(company.address.address);
        this.formGroup.get('city')?.setValue(company.address.city);
        this.formGroup.get('estate')?.setValue(company.address.estate);
        this.formGroup.get('country')?.setValue(company.address.country);
        this.formGroup.get('zipCode')?.setValue(company.address.cep);
        this.formGroup.get('complement')?.setValue(company.address.complement);
      }
      if (company.telephones) {
        for (let index = 0; index < company.telephones.length; index++) {
          if (company.telephones[index].type == 'HOME') {
            this.formGroup.get('homePhone')?.setValue(company.telephones[index].number);
          } else {
            this.formGroup.get('cellPhone')?.setValue(company.telephones[index].number);
          }
        }
      }

    });
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
