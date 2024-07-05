import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsStockModel } from '../../models/products-stock-model';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { IconDefinition, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-list-products-stock',
  templateUrl: './list-products-stock.component.html',
  styleUrls: ['./list-products-stock.component.css']
})
export class ListProductsStockComponent {
  productsStock$!: Observable<ProductsStockModel>;
  formGroup!: FormGroup;
  bsModalRef?: BsModalRef;
  companyId: string = '';
  buttons = [{
    name: 'CRIAR PRODUTO',
    link: '/product/productDetail/',
    class: 'btn-primary',
    iconButton: faPlusCircle,
    type: 'CREATE'
  },
  {
    name: 'VOLTAR',
    link: 'logistic/stockList',
    class: 'btn-secondary',
    iconButton: {} as IconDefinition,
    type: 'RETURN'
  }]
  constructor(private stockService: StockService,
    private modalService: BsModalService,
    private router: Router) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.companyId = String(s.path)
  }

  ngOnInit() {
    this.getProductsByCompanyId();
  }

  onSubmit(): void {

  }

  getProductsByCompanyId() {
    this.productsStock$ = this.stockService.getStockByCompanyId(this.companyId);
  }

  onClean() {
    this.formGroup.reset();
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}