import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { SupplierService } from '../../services/supplier.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { SupplierModel } from '../../models/supplier-model';
import { SupplierAddressModel } from '../../models/supplier-address-model';
import { TelephoneModel } from '../../models/supplier-telephone-model';
import { ErrorModel } from 'src/app/models/error/error-model';
import { SupplierPutModel } from '../../models/supplierPut-model';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent {
  @Input() supplierId: string = '';
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
  submitted: boolean = false;
  image!: Blob;
  buttons = [
    {
      name: 'VOLTAR',
      link: 'supplier/supplierList',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    },
    {
      name: 'SALVAR',
      link: '',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }]

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private modalService: BsModalService,
    private router: Router
  ) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.supplierId = String(s.path);
    this.formGroup = this.formBuilder.group({
      id: this.supplierId,
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      taxNumber: new FormControl('', [Validators.required, Validators.minLength(13)]),
      stateRegistration: '',
      branchActivity: '',
      street: '',
      numberStreet: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      nameUser: '',
      telephone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

    //this.formGroup.controls["email"].addValidators([Validators.required]);
  }

  ngOnInit() {
    if (this.formGroup.get('id')?.value !== 0) {
      this.getSupplierById(this.formGroup.get('id')?.value);
    }


  }
  get name() {
    return this.formGroup.get("name")!;
  }
  get taxNumber() {
    return this.formGroup.get("taxNumber")!;
  }
  get stateRegistration() {
    return this.formGroup.get("stateRegistration")!;
  }
  get branchActivity() {
    return this.formGroup.get("branchActivity")!;
  }
  get street() {
    return this.formGroup.get("street")!;
  }
  get numberStreet() {
    return this.formGroup.get("numberStreet")!;
  }
  get city() {
    return this.formGroup.get("city")!;
  }
  get estate() {
    return this.formGroup.get("estate")!;
  }
  get country() {
    return this.formGroup.get("country")!;
  }
  get zipCode() {
    return this.formGroup.get("zipCode")!;
  }
  get complement() {
    return this.formGroup.get("complement")!;
  }
  get nameUser() {
    return this.formGroup.get("nameUser")!;
  }
  get telephone() {
    return this.formGroup.get("telephone")!;
  }
  get email() {
    return this.formGroup.get("email")!;
  }

  onClickButton() {
    this.ngOnSubmit();
  }

  ngOnSubmit() {
    //this.submit(this.formGroup.value);
    try {
      this.submitted = true;
      if (this.formGroup.valid) {
        if (this.supplierId == '') {

          let supplierModel = {} as SupplierModel;
          supplierModel.name = this.formGroup.get('name')?.value;
          supplierModel.taxNumber = this.formGroup.get('taxNumber')?.value;
          supplierModel.email = this.formGroup.get('email')?.value;
          supplierModel.stateRegistration = this.formGroup.get('stateRegistration')?.value;
          supplierModel.branchActivity = this.formGroup.get('branchActivity')?.value;

          let supplierAddressModel = {} as SupplierAddressModel;
          supplierAddressModel.address = this.formGroup.get('address')?.value;
          supplierAddressModel.cep = this.formGroup.get('zipCode')?.value;
          supplierAddressModel.city = this.formGroup.get('city')?.value;
          supplierAddressModel.complement = this.formGroup.get('complement')?.value;
          supplierAddressModel.country = this.formGroup.get('country')?.value;
          supplierAddressModel.state = this.formGroup.get('estate')?.value;
          supplierModel.address = supplierAddressModel;

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
          supplierModel.telephone = telephonesModel;
          this.supplierService.createSupplier(supplierModel).subscribe(() => {
            this.handleModal('success', 'Fornecedor criado com sucesso.');
          },
            error => {
              let erro: ErrorModel;
              erro = error;
              this.handleModal('danger', erro.message);
            });
        }
        else {
          let supplierPutModel = <SupplierPutModel>{};
          supplierPutModel.name = this.formGroup.get('name')?.value;
          supplierPutModel.taxNumber = this.formGroup.get('taxNumber')?.value;
          supplierPutModel.email = this.formGroup.get('email')?.value;
          supplierPutModel.stateRegistration = this.formGroup.get('stateRegistration')?.value;
          supplierPutModel.branchActivity = this.formGroup.get('branchActivity')?.value;
          let supplierAddressModel = {} as SupplierAddressModel;
          supplierAddressModel.address = this.formGroup.get('address')?.value;
          supplierAddressModel.cep = this.formGroup.get('zipCode')?.value;
          supplierAddressModel.city = this.formGroup.get('city')?.value;
          supplierAddressModel.complement = this.formGroup.get('complement')?.value;
          supplierAddressModel.country = this.formGroup.get('country')?.value;
          supplierAddressModel.state = this.formGroup.get('estate')?.value;
          supplierPutModel.address = supplierAddressModel;
          console.log(supplierPutModel);
          this.supplierService.updateSupplier(this.supplierId, supplierPutModel).subscribe(() => {
            this.handleModal('success', 'Fornecedor atualizado com sucesso.');
          });
        }
      } else {
        this.handleModal('danger', 'Formulário inválido.');
      }
    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }


  getSupplierById(supplierId: string) {
    this.supplierService.getSupplierById(supplierId).subscribe((supplier: SupplierModel) => {
      this.formGroup.get('name')?.setValue(supplier.name);
      this.formGroup.get('taxNumber')?.setValue(supplier.taxNumber);
      this.formGroup.get('email')?.setValue(supplier.email);
      this.formGroup.get('stateRegistration')?.setValue(supplier.stateRegistration);
      this.formGroup.get('branchActivity')?.setValue(supplier.branchActivity);
      if (supplier.address) {
        this.formGroup.get('address')?.setValue(supplier.address.address);
        this.formGroup.get('city')?.setValue(supplier.address.city);
        this.formGroup.get('state')?.setValue(supplier.address.state);
        this.formGroup.get('country')?.setValue(supplier.address.country);
        this.formGroup.get('zipCode')?.setValue(supplier.address.cep);
        this.formGroup.get('complement')?.setValue(supplier.address.complement);
      }
      if (supplier.telephone) {
        for (let index = 0; index < supplier.telephone.length; index++) {
          if (supplier.telephone[index].type == 'HOME') {
            this.formGroup.get('homePhone')?.setValue(supplier.telephone[index].number);
          } else {
            this.formGroup.get('cellPhone')?.setValue(supplier.telephone[index].number);
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
