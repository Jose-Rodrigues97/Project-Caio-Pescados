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
import { Observable } from 'rxjs';
import { SuppliersModel } from 'src/app/modules/suppliers/models/suppliers-model';
import { PurchaseModel } from '../../models/purchase-model';
import { StockService } from 'src/app/modules/logistic/components/stock/services/stock.service';
import { ProductService } from 'src/app/modules/products/service/product.service';
import { ProductsModel } from 'src/app/modules/products/models/products-model';
import { ProductStockModel } from 'src/app/modules/logistic/components/stock/models/product-stock-model';
import { SupplierModel } from 'src/app/modules/suppliers/models/supplier-model';
import { ProductsStockModel } from 'src/app/modules/logistic/components/stock/models/products-stock-model';

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
  stocks$!: Observable<ProductsStockModel>
  products$!: Observable<ProductsModel>
  bsModalRef?: BsModalRef;
  transports = {} as TransportModel[];
  shippingCompanys = {} as ShippingCompanyModel[];
  faPlus = faPlusCircle;
  faShare = faShare;

  constructor(
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    private supplierService: SupplierService,
    private productService: ProductService,
    private modalService: BsModalService,
    private stockService: StockService,
    private router: Router
  ) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.purchaseId = Number(s.path);
    this.formGroup = this.formBuilder.group({
      id: this.purchaseId,
      supplier: '',
      taxNumber: '',
      valorTotal: '0,00R$',
      status: 'teste',
      address: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      creationDate: '',
      stock: '',
      product: '',
      amount: '',
      value: '',
      transport: '',
      taxNumberTrans: '',
      transportVehicle: '',
      height: '',
      comment: '',
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
      this.getStocks();
    }

  }

  ngAfterViewChecked(): void {
    // this.onChangeRazaoSocial(document.getElementById('supplierid'));
    // this.onChangeTaxNumber(document.getElementById('tax-number'));
  }

  onChangeRazaoSocial(target: any) {
    if (target) {
      let supplierId = (<HTMLInputElement>target).value;
      supplierId = String(supplierId.substring(supplierId.indexOf(":") + 2, supplierId.length));
      this.supplierService.getSupplierById(supplierId)
        .subscribe((supplier: SupplierModel) => {
          this.formGroup.get('taxNumber')?.setValue(supplier.taxNumber);
        })
    }
  }

  onChangeTaxNumber(target: any) {
    if (target) {
      let taxNumber = (<HTMLInputElement>target).value;
      taxNumber = String(taxNumber.substring(taxNumber.indexOf(":") + 1, taxNumber.length));
      this.supplierService.getSupplierByTaxNumber(taxNumber).subscribe((supplier: SupplierModel) => {
        this.formGroup.get('supplier')?.setValue(supplier.supplierId);
      });
    }
  }

  onChangeProduct(target: any) {
  }

  onChangeStock(target: any) {
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
      this.formGroup.get('item')?.setValue(purchase.items);
      this.formGroup.get('amount')?.setValue(purchase.amount);
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



  getSuppliers() {
    this.suppliers$ = this.supplierService.getSuppliers();
  }

  getStocks() {
    console.log('entrou no getStock');
    this.stocks$ = this.stockService.getStocks();
  }

  getProducts(stockId: number) {
    this.products$ = this.productService.getProducts();
  }

}



