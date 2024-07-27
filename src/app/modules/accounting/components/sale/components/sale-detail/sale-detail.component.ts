import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShippingCompanyModel } from 'src/app/modules/accounting/models/shipping-company-model';
import { TransportModel } from 'src/app/modules/accounting/models/transport-model';
import { faPlusCircle, faShare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerModel } from 'src/app/modules/customers/models/customer-model';
import { Observable } from 'rxjs';
import { CompaniesModel } from 'src/app/modules/companies/models/companies-model';
import { PurchaseItemsModel } from '../../../purchase/models/purchase-items-model';
import { MatTable } from '@angular/material/table';
import { CompanyService } from 'src/app/modules/companies/services/company.service';
import { CustomerService } from 'src/app/modules/customers/services/customer.service';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { ProductsStockModel } from 'src/app/modules/logistic/components/stock/models/products-stock-model';
import { StockService } from 'src/app/modules/logistic/components/stock/services/stock.service';
import { CustomersModel } from 'src/app/modules/customers/models/customers-model';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent {
  @Input() saleId: number = 0;
  formGroup!: FormGroup;
  ELEMENT_DATA: PurchaseItemsModel[] = [];
  companies$!: Observable<CompaniesModel>
  faPlus = faPlusCircle;
  faShare = faShare;
  displayedColumns: string[] = ['position', 'Produto', 'Estoque', 'Quantidade', 'Valor', 'Valor total'];
  @ViewChild(MatTable) table!: MatTable<any>;
  buttons = [
    {
      name: 'SALVAR',
      link: '/saleDetail/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    },
    {
      name: 'VOLTAR',
      link: '/purchase/saleList',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    }]
  stocks$!: Observable<ProductsStockModel>
  clients$!: Observable<CustomersModel>;
  bsModalRef?: BsModalRef;
  transports = {} as TransportModel[];
  shippingCompanys = {} as ShippingCompanyModel[];

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private stockService: StockService,
    private modalService: BsModalService,
    private companyService: CompanyService
  ) {
    this.formGroup = this.formBuilder.group({
      id: this.saleId,
      supplier: '',
      taxNumber: '',
      valorTotal: '0,00R$',
      status: 'Em composição',
      address: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      creationDate: '',
      company: '',
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
    console.log(this.saleId)
    if (this.formGroup.get('id')?.value !== 0) {
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/purchase/purchaseList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    } else {
      this.getCustomers();
      this.getCompanies();
    }
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  getCustomers() {
    this.clients$ = this.customerService.getCustomers();
  }

  onClickButton() {
    this.saveCompetition(this.formGroup.value);
  }

  saveCompetition(formGroup: FormGroup) {

  };

  onChangeStock(target: any) {
    let companyId = (<HTMLInputElement>target).value;
    companyId = String(companyId.substring(companyId.indexOf(":") + 1, companyId.length));
    this.getStocksByCompanyId(companyId);
  }

  getStocksByCompanyId(companyId: string) {
    let stockId: number = 0;
    this.stocks$ = this.stockService.getStockByCompanyId(companyId);
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

  onChangeRazaoSocial(target: any) {
    if (target) {
      let clientId = (<HTMLInputElement>target).value;
      clientId = String(clientId.substring(clientId.indexOf(":") + 2, clientId.length));
      this.customerService.getCustomerById(clientId)
        .subscribe((client: CustomerModel) => {
          this.formGroup.get('taxNumber')?.setValue(client.taxRecord);
        })
    }
  }

  onChangeTaxNumber(target: any) {
    if (target) {
      let taxNumber = (<HTMLInputElement>target).value;
      taxNumber = String(taxNumber.substring(taxNumber.indexOf(":") + 1, taxNumber.length));
      this.customerService.getCustomerById(taxNumber).subscribe((client: CustomerModel) => {
        this.formGroup.get('supplier')?.setValue(client.name);
      });
    }
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}