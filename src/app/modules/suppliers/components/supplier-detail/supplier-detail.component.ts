import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SupplierService } from '../../services/supplier.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { SupplierModel } from '../../models/supplier-model';
import { ErrorModel } from 'src/app/models/error/error-model';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AddressModel } from 'src/app/models/address/address-model';
import { TelephoneModel } from 'src/app/models/telephone/telephone-model';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})

export class SupplierDetailComponent implements OnInit, AfterViewChecked {
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
      taxNumber: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
      stateRegistration: '',
      branchActivity: '',
      address: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      nameUser: '',
      telephone: '',
      email: '',
    });

    //this.formGroup.controls["email"].addValidators([Validators.required]);
  }

  ngOnInit() {
    if (this.formGroup.get('id')?.value !== '') {
      this.getSupplierById(this.formGroup.get('id')?.value);
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/supplier/supplierList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    }
  }

  ngAfterViewChecked(): void {
    this.onChangeName(document.getElementById('name'));
    this.onChangeTaxNumber(document.getElementById('taxNumber'));
  }

  onChangeName(target: any) {
    if (target) {
      if (this.name.errors) {
        (<HTMLInputElement>target).classList.remove('is-valid');
        (<HTMLInputElement>target).classList.add('is-invalid');
      } else {
        (<HTMLInputElement>target).classList.add('is-valid');
        (<HTMLInputElement>target).classList.remove('is-invalid');
      }
    }
  }

  onChangeTaxNumber(target: any) {
    if (target) {
      if (this.taxNumber.errors) {
        (<HTMLInputElement>target).classList.remove('is-valid');
        (<HTMLInputElement>target).classList.add('is-invalid');
      } else {
        (<HTMLInputElement>target).classList.add('is-valid');
        (<HTMLInputElement>target).classList.remove('is-invalid');
      }
    }
  }

  onClickButton(type: string) {
    if (type == 'DELETE') {
      this.onDeleteSupplier();
    } else {
      this.ngOnSubmit();
    }
  }

  onInsertImage(file: Blob) {
    this.formGroup.get('image')?.setValue(file);
  }

  onDeleteSupplier() {
    this.supplierService.deleteSupplier(this.supplierId).subscribe(() => {
      this.router.navigateByUrl('/supplier/supplierList');
      this.handleModal('success', 'Fornecedor excluído com sucesso.');
    },
      error => {
        this.handleModal('danger', error);
      });
  }

  ngOnSubmit() {
    //this.submit(this.formGroup.value);
    try {
      this.submitted = true;
      if (this.formGroup.valid) {

        let supplierModel = {} as SupplierModel;
        supplierModel.name = this.formGroup.get('name')?.value;
        supplierModel.taxNumber = this.formGroup.get('taxNumber')?.value;
        supplierModel.email = this.formGroup.get('email')?.value;
        supplierModel.stateRegistration = this.formGroup.get('stateRegistration')?.value;
        supplierModel.branchActivity = this.formGroup.get('branchActivity')?.value;


        if (this.formGroup.get('address')) {
          let supplierAddressModel = {} as AddressModel;
          supplierAddressModel.addressId = this.formGroup.get('addressId')?.value;
          supplierAddressModel.address = this.formGroup.get('address')?.value;
          supplierAddressModel.cep = this.formGroup.get('zipCode')?.value;
          supplierAddressModel.city = this.formGroup.get('city')?.value;
          supplierAddressModel.complement = this.formGroup.get('complement')?.value;
          supplierAddressModel.country = this.formGroup.get('country')?.value;
          supplierAddressModel.estate = this.formGroup.get('estate')?.value;
          supplierAddressModel.objectType = this.formGroup.get('addresObjectType')?.value;
          supplierAddressModel.objectId = this.formGroup.get('addresObjectId')?.value;
          console.log(supplierAddressModel);
          supplierModel.address = supplierAddressModel;
        }

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
        supplierModel.telephones = telephonesModel;
        if (this.supplierId == '') {
          this.supplierService.createSupplier(supplierModel).subscribe(() => {
            this.buttons.push({
              name: 'EXCLUIR',
              link: '/supplier/supplierList',
              class: 'btn-danger',
              iconButton: {} as IconDefinition,
              type: 'DELETE'
            })
            this.supplierId = supplierModel.supplierId;
            this.handleModal('success', 'Fornecedor criado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }

        else {
          this.supplierService.updateSupplier(this.supplierId, supplierModel).subscribe(() => {
            this.handleModal('success', 'Fornecedor atualizado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
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
        this.formGroup.get('state')?.setValue(supplier.address.estate);
        this.formGroup.get('country')?.setValue(supplier.address.country);
        this.formGroup.get('zipCode')?.setValue(supplier.address.cep);
        this.formGroup.get('complement')?.setValue(supplier.address.complement);
      }
      if (supplier.telephones) {
        for (let index = 0; index < supplier.telephones.length; index++) {
          if (supplier.telephones[index].type == 'HOME') {
            this.formGroup.get('homePhone')?.setValue(supplier.telephones[index].number);
          } else {
            this.formGroup.get('cellPhone')?.setValue(supplier.telephones[index].number);
          }
        }
      }
    },
      error => {
        let erro: ErrorModel;
        erro = error;
        this.handleModal('danger', erro.message);
      });
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
  get address() {
    return this.formGroup.get("address")!;
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

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }

}
