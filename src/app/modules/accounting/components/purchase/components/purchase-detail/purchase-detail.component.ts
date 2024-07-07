import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { TransportModel } from 'src/app/modules/accounting/models/transport-model';
import { ShippingCompanyModel } from 'src/app/modules/accounting/models/shipping-company-model';
import { faPlusCircle, faShare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SupplierService } from 'src/app/modules/suppliers/services/supplier.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { ErrorModel } from 'src/app/models/error/error-model';
import { Observable } from 'rxjs';
import { SuppliersModel } from 'src/app/modules/suppliers/models/suppliers-model';
import { PurchaseModel } from '../../models/purchase-model';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent {
  @Input() purchaseId: number = 0;
  formGroup!: FormGroup;
  submitted: boolean = false;
  buttons = [
    {
      name: 'VOLTAR',
      link: '/purchase',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    },
    {
      name: 'SALVAR',
      link: '/purchase/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }]
  suppliers$!: Observable<SuppliersModel>
  bsModalRef?: BsModalRef;
  transports = {} as TransportModel[];
  shippingCompanys = {} as ShippingCompanyModel[];
  faPlus = faPlusCircle;
  faShare = faShare;

  constructor(
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    private supplierService: SupplierService,
    private modalService: BsModalService,
    private router: Router
  ) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.purchaseId = Number(s.path);
    this.formGroup = this.formBuilder.group({
      id: this.purchaseId,
      supplier: '',
      taxNumber: '',
      valorTotal: '',
      item: '',
      amount: '',
      value: '',
      status: '',
      address: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      creationDate: '',
      comment: ''
    })
  }

  ngOnInit() {
    if (this.formGroup.get('id')?.value !== 0) {
      this.getPurchaseById(this.formGroup.get('id')?.value);
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/purchase/purchaseList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    } else {
      this.getSuppliers();
    }

  }

  ngAfterViewChecked(): void {
    // this.onChangeTaxNumber(document.getElementById('taxNumber'));
  }

  onChangeSupplier(target: any) {
    // if (target) {
    //   if (this.supplier.errors) {
    //     (<HTMLInputElement>target).classList.remove('is-valid');
    //     (<HTMLInputElement>target).classList.add('is-invalid');
    //   } else {
    //     (<HTMLInputElement>target).classList.add('is-valid');
    //     (<HTMLInputElement>target).classList.remove('is-invalid');
    //   }
    // }
  }

  onClickButton(type: string) {
    if (type == 'DELETE') {
      this.onDeletePurchase();
    } else {
      this.ngOnSubmit();
    }
  }

  getPurchaseById(purchaseId: number) {
    this.purchaseService.getPurchaseById(purchaseId).subscribe((purchase: PurchaseModel) => {
      this.formGroup.get('supplier')?.setValue(purchase.supplier);
      this.formGroup.get('taxNumber')?.setValue(purchase.taxNumber);
      this.formGroup.get('valorTotal')?.setValue(purchase.valorTotal);
      this.formGroup.get('item')?.setValue(purchase.item);
      this.formGroup.get('amount')?.setValue(purchase.amount);
      this.formGroup.get('value')?.setValue(purchase.value);
      if (purchase.address) {
        this.formGroup.get('address')?.setValue(purchase.address.address);
        this.formGroup.get('city')?.setValue(purchase.address.city);
        this.formGroup.get('state')?.setValue(purchase.address.estate);
        this.formGroup.get('country')?.setValue(purchase.address.country);
        this.formGroup.get('zipCode')?.setValue(purchase.address.cep);
        this.formGroup.get('complement')?.setValue(purchase.address.complement);
      }
      this.formGroup.get('creationDate')?.setValue(purchase.creationDate);
      this.formGroup.get('comment')?.setValue(purchase.comment);
    })
  };

  onDeletePurchase() {
    this.purchaseService.deletePurchase(this.purchaseId).subscribe(() => {
      this.router.navigateByUrl('/purchase/purchaseList');
      this.handleModal('success', 'Pedido excluído com sucesso.');
    },
      error => {
        this.handleModal('danger', error);
      });
  }

  ngOnSubmit() {
    if (this.formGroup.get('id')?.value !== 0) {
      this.getPurchaseById(this.formGroup.get('id')?.value);
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/purchase/purchaseList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    }
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }

  supplier() {
    return this.formGroup.get("supplier")!;
  }

  getSuppliers() {
    this.suppliers$ = this.supplierService.getSuppliers();
  }

}



