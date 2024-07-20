import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { StockService } from '../../services/stock.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { ErrorModel } from 'src/app/models/error/error-model';
import { ProductStockModel } from '../../models/product-stock-model';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-product-detail.component.html',
  styleUrls: ['./stock-product-detail.component.css']
})
export class StockProductDetailComponent {
  @Input() productStockId: number = 0;
  formGroup!: FormGroup;
  bsModalRef?: BsModalRef;
  companyId!: string;
  buttons = [
    {
      name: 'SALVAR',
      link: '',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }]

  constructor(private stockService: StockService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.productStockId = Number(s.path);
    this.formGroup = this.formBuilder.group({
      stockId: this.productStockId,
      productId: '',
      name: '',
      description: '',
      aquaType: '',
      price: new FormControl(0, [Validators.min(0)]),
      quantity: new FormControl(0, [Validators.min(0)])
    });
  }

  ngOnInit() {
    if (this.productStockId !== 0) {
      this.getStockById(this.productStockId);
    }
  }

  ngOnSubmit() {
    try {
      if (this.formGroup.valid) {
        let productStockModel = {} as ProductStockModel;
        productStockModel.stockId = this.productStockId;
        productStockModel.price = this.formGroup.get('price')?.value;
        productStockModel.quantity = this.formGroup.get('quantity')?.value;
        console.log(productStockModel.quantity)
        this.stockService.updateStock(this.productStockId, productStockModel).subscribe(() => {
          this.handleModal('success', 'Produto atualizado no estoque com sucesso.');
        },
          error => {
            let erro: ErrorModel;
            erro = error;
            this.handleModal('danger', erro.error);
          });
      }
      else {
        this.handleModal('danger', 'Formulário inválido.');
      }
    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  onClickButton(type: string) {
    if (type == 'DELETE') {
      this.onDeleteProductStock();
    } else {
      this.ngOnSubmit();
    }
  }

  getStockById(productStockId: number) {
    this.stockService.getStockById(productStockId).subscribe((productStockModel: ProductStockModel) => {
      this.formGroup.get('name')?.setValue(productStockModel.product.name);
      this.formGroup.get('description')?.setValue(productStockModel.product.description);
      this.formGroup.get('aquaType')?.setValue(productStockModel.product.aquaType);
      this.formGroup.get('price')?.setValue(productStockModel.price);
      this.formGroup.get('quantity')?.setValue(productStockModel.quantity);
      this.companyId = productStockModel.company.companyId;
      this.buttons.push({
        name: 'VOLTAR',
        link: 'logistic/stockProductList/' + this.companyId,
        class: 'btn-secondary',
        iconButton: {} as IconDefinition,
        type: 'RETURN'
      },
        {
          name: 'EXCLUIR',
          link: '/product/productList',
          class: 'btn-danger',
          iconButton: {} as IconDefinition,
          type: 'DELETE'
        });
    },
      error => {
        let erro: ErrorModel;
        erro = error;
        this.handleModal('danger', erro.message);
      });
  }

  onDeleteProductStock() {
    this.stockService.deleteStock(this.productStockId).subscribe(() => {
      this.handleModal('success', 'Produto excluído do estoque com sucesso.');
      this.router.navigateByUrl('/logistic/stockProductList/' + this.companyId);
    },
      error => {
        this.handleModal('danger', error);
      });
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
