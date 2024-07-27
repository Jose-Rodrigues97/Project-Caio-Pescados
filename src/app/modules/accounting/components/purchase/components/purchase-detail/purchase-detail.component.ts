import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { TransportModel } from 'src/app/modules/accounting/models/transport-model';
import { ShippingCompanyModel } from 'src/app/modules/accounting/models/shipping-company-model';
import { faPlusCircle, faShare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SupplierService } from 'src/app/modules/suppliers/services/supplier.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { Observable, tap } from 'rxjs';
import { SuppliersModel } from 'src/app/modules/suppliers/models/suppliers-model';
import { PurchaseModel } from '../../models/purchase-model';
import { StockService } from 'src/app/modules/logistic/components/stock/services/stock.service';
import { ProductService } from 'src/app/modules/products/service/product.service';
import { ProductsModel } from 'src/app/modules/products/models/products-model';
import { SupplierModel } from 'src/app/modules/suppliers/models/supplier-model';
import { ProductsStockModel } from 'src/app/modules/logistic/components/stock/models/products-stock-model';
import { CompaniesModel } from 'src/app/modules/companies/models/companies-model';
import { CompanyService } from 'src/app/modules/companies/services/company.service';
import { PurchaseItemsModel } from '../../models/purchase-items-model';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent {
  @Input() purchaseId!: number;
  formGroup!: FormGroup;
  submitted: boolean = false;
  buttons = [
    {
      name: 'VOLTAR',
      link: '/purchase/purchaseList',
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
  companies$!: Observable<CompaniesModel>
  suppliers$!: Observable<SuppliersModel>
  stocks$!: Observable<ProductsStockModel>
  products$!: Observable<ProductsModel>
  bsModalRef?: BsModalRef;
  transports = {} as TransportModel[];
  shippingCompanys = {} as ShippingCompanyModel[];
  ELEMENT_DATA: PurchaseItemsModel[]=[];
  faPlus = faPlusCircle;
  faShare = faShare;
  displayedColumns: string[] = ['position', 'Produto', 'Estoque', 'Quantidade', 'Valor', 'Valor total'];
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    private supplierService: SupplierService,
    private productService: ProductService,
    private modalService: BsModalService,
    private stockService: StockService,
    private companyService: CompanyService,
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
      this.getCompanies();
      //this.getStocks();
    }

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

  onChangeStock(target: any) {
    let companyId = (<HTMLInputElement>target).value;
    companyId = String(companyId.substring(companyId.indexOf(":") + 1, companyId.length));
    this.getStocksByCompanyId(companyId);
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

  getSuppliers() {
    this.suppliers$ = this.supplierService.getSuppliers();
  }

  getStocksByCompanyId(companyId: string) {
    let stockId: number = 0;
    this.stocks$ = this.stockService.getStockByCompanyId(companyId);
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  onInsert() {
    let purchaseItem!: PurchaseItemsModel;
    purchaseItem.itemId = this.formGroup.get('product')?.value;
    purchaseItem.quantity = this.formGroup.get('amount')?.value;
    purchaseItem.stockId = this.formGroup.get('stock')?.value;
    purchaseItem.value = this.formGroup.get('value')?.value;
    this.ELEMENT_DATA.push(purchaseItem);
    this.table.renderRows();

  }

  onDeletePurchase() {
    this.purchaseService.deletePurchase(this.purchaseId).subscribe(() => {
      this.router.navigateByUrl('/purchase/purchaseList');
      this.handleModal('success', 'Pedido excluído com sucesso.');
    },
      error => {
        this.handleModal('danger', error);
      });
  }
  onClickButton(type: string) {
    if (type == 'DELETE') {
      this.onDeletePurchase();
    } else {
      this.ngOnSubmit();
    }
  }
  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}



