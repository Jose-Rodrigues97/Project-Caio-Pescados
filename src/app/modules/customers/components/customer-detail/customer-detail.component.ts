import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { properties } from '../../properties/properties';
import { CustomerService } from '../../services/customer.service';
import { ImageService } from 'src/app/modules/themes/components/upload/services/image.service';
import { DatePipe } from '@angular/common';
import { CustomerModel } from '../../models/customer-model';
import { ErrorModel } from 'src/app/models/error/error-model';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {

  @Input() buyerId: string = '';
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
  submitted: boolean = false;
  imageId!: string;
  person!: string;
  image!: Blob;
  typesPerson = [
    'Pessoa Física',
    'Pessoa Jurídica'
  ];

  isShowPanelOpeningHours = properties.isShowPanelOpeningHours;
  buttons = [
    {
      name: 'SALVAR',
      link: '/customerDetail/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    },
    {
      name: 'VOLTAR',
      link: 'customer/customersList',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    }]

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private modalService: BsModalService,
    private router: Router) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.buyerId = String(s.path);
    this.formGroup = this.formBuilder.group({
      buyerId: '',
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      typePerson: new FormControl('', [Validators.required]),
      CPF: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      CNPJ: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
      isActive: '',
      creationDate: '',
      updateDate: '',
    })
  }

  ngOnInit(): void {
    if (this.buyerId !== '') {
      this.getCustomerById(this.buyerId);
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/company/companiesList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    }
  }

  ngAfterViewChecked(): void {
    this.onChangeName(document.getElementById('name'));
    this.onChangeTypePerson(document.getElementById('typePerson'));
    this.onChangeCNPJ(document.getElementById('CNPJ'));
    this.onChangeCPF(document.getElementById('CPF'));
  }

  get name() {
    return this.formGroup.get("name")!;
  }

  get CPF() {
    return this.formGroup.get("CPF")!;
  }

  get CNPJ() {
    return this.formGroup.get("CNPJ")!;
  }

  get typePerson() {
    return this.formGroup.get("typePerson")!;
  }

  changePerson() {
    this.person = this.formGroup.get('typePerson')?.value;
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

  onChangeTypePerson(target: any) {
    if (target) {
      if (this.typePerson.errors) {
        (<HTMLInputElement>target).classList.remove('is-valid');
        (<HTMLInputElement>target).classList.add('is-invalid');
      } else {
        (<HTMLInputElement>target).classList.add('is-valid');
        (<HTMLInputElement>target).classList.remove('is-invalid');
      }
    }
  }

  onChangeCPF(target: any) {
    if (target) {
      if (this.CPF.errors) {
        (<HTMLInputElement>target).classList.remove('is-valid');
        (<HTMLInputElement>target).classList.add('is-invalid');
      } else {
        (<HTMLInputElement>target).classList.add('is-valid');
        (<HTMLInputElement>target).classList.remove('is-invalid');
      }
    }
  }

  onChangeCNPJ(target: any) {
    if (target) {
      if (this.CNPJ.errors) {
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
      this.onDeleteCustomer();
    } else {
      this.ngOnSubmit();
    }
  }

  onInsertImage(file: Blob) {
    this.formGroup.get('image')?.setValue(file);
  }

  onDeleteCustomer() {
    let exclude = confirm("Deseja realmente excluir o cliente?");
    if (exclude) {
      this.customerService.deleteCustomer(this.buyerId).subscribe(() => {
        this.router.navigateByUrl('/customer/customersList');
        this.handleModal('success', 'Cliente excluído com sucesso.');
      },
        error => {
          console.log(error.message)
          this.handleModal('danger', error);
        });
    }
  }

  ngOnSubmit() {
    try {
      this.submitted = true;
      if (this.typePerson.valid && this.name.valid && (this.CPF.valid || this.CNPJ.valid)) {
        let customerModel = {} as CustomerModel;
        customerModel.buyerId = this.formGroup.get('buyerId')?.value;
        customerModel.name = this.formGroup.get('name')?.value;
        customerModel.typePerson = this.formGroup.get('typePerson')?.value;
        if (customerModel.typePerson == 'Pessoa Jurídica') {
          customerModel.taxRecord = this.formGroup.get('CNPJ')?.value;
        } else {
          customerModel.taxRecord = this.formGroup.get('CPF')?.value;
        }
        if (this.buyerId == '') {
          this.customerService.createCustomer(customerModel).subscribe((customerModel: CustomerModel) => {
            this.buttons.push({
              name: 'EXCLUIR',
              link: '/company/companiesList',
              class: 'btn-danger',
              iconButton: {} as IconDefinition,
              type: 'DELETE'
            })
            this.buyerId = customerModel.buyerId;
            this.handleModal('success', 'Cliente criado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }
        else {
          this.customerService.updateCustomer(this.buyerId, customerModel).subscribe(() => {
            this.handleModal('success', 'Cliente atualizado com sucesso.');
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

  getCustomerById(customerId: string) {
    this.customerService.getCustomerById(customerId).subscribe((customer: CustomerModel) => {
      this.formGroup.get('buyerId')?.setValue(customer.buyerId);
      this.formGroup.get('name')?.setValue(customer.name);
      this.formGroup.get('typePerson')?.setValue(customer.typePerson);
      if (customer.typePerson == 'Pessoa Jurídica') {
        this.formGroup.get('CNPJ')?.setValue(customer.taxRecord);
      } else {
        this.formGroup.get('CPF')?.setValue(customer.taxRecord);
      }
    },
      error => {
        let erro: ErrorModel;
        erro = error;
        this.handleModal('danger', erro.message);
      });
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}