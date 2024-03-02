import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { SupplierService } from '../../services/supplier.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent {
  @Input() supplierId: number = 0;
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
  buttons = [
    {
      name: 'VOLTAR',
      link: 'supplier/supplierList',
      class: 'btn-secondary'
    },
    {
      name: 'SALVAR',
      link: '',
      class: 'btn-primary'
    }]

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private modalService: BsModalService,
    private router: Router
  ) {
  }

  ngOnInit() {

    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.supplierId = Number(s.path);

    this.formGroup = this.formBuilder.group({
      name: '',
      taxNumber: '',
      stateRegistration: '',
      branch: '',
      street: '',
      numberStreet: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      nameUser: '',
      telephone: '',
      email: ''
    });
    this.formGroup.controls["name"].addValidators([Validators.required, Validators.minLength(5)]);
    this.formGroup.controls["taxNumber"].addValidators([Validators.required, Validators.minLength(13)]);
    this.formGroup.controls["telephone"].addValidators([Validators.required]);
    this.formGroup.controls["email"].addValidators([Validators.required]);

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
  get branch() {
    return this.formGroup.get("branch")!;
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

  ngOnSubmit() {
    this.submit(this.formGroup.value);
  }

  onClickButton() {
    this.ngOnSubmit();
  }
  submit(formGroup: FormGroup) {
    try {
      if (this.supplierId == 0) {
        this.supplierService.createSupplier(this.formGroup.value).subscribe(() => {
          this.handleModal('success', 'Fornecedor criado com sucesso.');
        });
      }
      else {
        this.supplierService.updateSupplier(this.supplierId, this.formGroup.value).subscribe(() => {
          this.handleModal('success', 'Fornecedor salvo com sucesso.');
        });
      }
    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }

}
