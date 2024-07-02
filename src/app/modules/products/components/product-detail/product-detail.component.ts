import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from '../../service/product.service';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { ProductModel } from '../../models/product-model';
import { ErrorModel } from 'src/app/models/error/error-model';
import { CompaniesModel } from 'src/app/modules/companies/models/companies-model';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/modules/companies/services/company.service';
import { ProductStockService } from 'src/app/modules/logistic/components/stock/services/product-stock.service';
import { StockModel } from 'src/app/modules/logistic/components/stock/models/stock-model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewChecked {
  @Input() productId: number = 0;
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
  submitted: boolean = false;
  companies$!: Observable<CompaniesModel>;
  buttons = [
    {
      name: 'SALVAR',
      link: '',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }, {
      name: 'VOLTAR',
      link: 'product/productList',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    }]

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private modalService: BsModalService,
    private router: Router,
    private companyService: CompanyService,
    private productStockService: ProductStockService,
  ) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.productId = Number(s.path);
    this.formGroup = this.formBuilder.group({
      id: this.productId,
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: '',
      aquaType: '',
      stock: ''
    });
  }
  ngOnInit() {
    this.getCompanies();
    if (this.productId !== 0) {
      this.getProductById(this.productId);
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/product/productList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    }
  }

  ngAfterViewChecked(): void {
    this.onChangeName(document.getElementById('name'));
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

  onClickButton(type: string) {
    if (type == 'DELETE') {
      this.onDeleteProduct();
    } else {
      this.ngOnSubmit();
    }
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(() => {
      this.router.navigateByUrl('/product/productList');
      this.handleModal('success', 'Produto excluído com sucesso.');
    },
      error => {
        this.handleModal('danger', error);
      });
  }

  ngOnSubmit() {
    try {
      this.submitted = true;
      if (this.formGroup.valid) {
        let productModel = {} as ProductModel;
        productModel.name = this.formGroup.get('name')?.value;
        productModel.description = this.formGroup.get('description')?.value;
        productModel.aquaType = this.formGroup.get('aquaType')?.value;
        if (this.productId == 0) {
          this.productService.createProduct(productModel).subscribe(() => {
            this.buttons.push({
              name: 'EXCLUIR',
              link: '/product/productList',
              class: 'btn-danger',
              iconButton: {} as IconDefinition,
              type: 'DELETE'
            })
            this.productId = productModel.productId;
            this.handleModal('success', 'Produto criado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }
        else {
          this.productService.updateProduct(this.productId, productModel).subscribe(() => {
            this.handleModal('success', 'Produto atualizado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }
        if (this.formGroup.get('stock')?.value) {
          let stockModel = {} as StockModel;
          stockModel.productId = this.productId;
          for (let index = 0; index < this.formGroup.get('stock')?.value.length; index++) {
            stockModel.companyId = this.formGroup.get('stock')?.value[index]
            this.productStockService.createStock(stockModel).subscribe(() => { },
              error => {
                this.handleModal('danger', error);
              });
          }
        }
      } else {
        this.handleModal('danger', 'Formulário inválido.');
      }
    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  getProductById(productId: number) {
    this.productService.getProductById(productId).subscribe((productModel: ProductModel) => {
      this.formGroup.get('name')?.setValue(productModel.name);
      this.formGroup.get('description')?.setValue(productModel.description);
      this.formGroup.get('aquaType')?.setValue(productModel.aquaType);
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

  get description() {
    return this.formGroup.get("description")!;
  }

  get aquaType() {
    return this.formGroup.get("aquaType")!;
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
