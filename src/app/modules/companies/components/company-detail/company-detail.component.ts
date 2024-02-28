import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { CompanyModel } from '../../models/company-model/company-model';
import { Companyv2Model } from '../../models/company-model/companyv2-model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  @Input() companyId: number = 0;
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
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
      taxNumber: new FormControl('', [Validators.required, Validators.minLength(13)]),
      corporateReason: '',
      cnae: '',
      stateRegistration: '',
      creationDate: '',
      situationRevenue: '',
      street: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
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
      if (this.companyId == 0) {
        let companyv2Model = <Companyv2Model>{};
        companyv2Model.corporateName = this.formGroup.get('name')?.value;
        companyv2Model.email = this.formGroup.get('email')?.value;
        companyv2Model.taxNumber = this.formGroup.get('taxNumber')?.value;
        this.companyService.createCompany(companyv2Model).subscribe(() => {
          this.handleModal('success', 'Empresa criada com sucesso.');
        });
      }
      else {
        this.companyService.updateCompany(this.companyId, this.formGroup.value).subscribe(() => {
          this.handleModal('success', 'Empresa atualizada com sucesso.');
        });
      }
    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  getCompanyById(id: number) {
    this.companyService.getCompanyById(id).subscribe((company: CompanyModel) => {
      this.formGroup = this.formBuilder.group({
        name: [company.name],

      })
    });
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
