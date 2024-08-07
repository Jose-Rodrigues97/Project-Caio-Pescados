import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
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
import { StockModel } from 'src/app/modules/logistic/components/stock/models/stock-model';
import { StockService } from 'src/app/modules/logistic/components/stock/services/stock.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewChecked, OnDestroy {
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
    private stockService: StockService,
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

  ngOnDestroy(): void {
    document.getElementById('newTag')?.remove();
  }

  ngOnInit(): void {
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
      this.getProductById(this.productId);
    }
    var stocks = document.getElementById('inputStock');
    if (!stocks) {
      setTimeout(this.createScript, 100);
    }
  }

  createScript() {
    const newTag = document.createElement("script");
    newTag.id = 'newTag'
    const newContent = document.createTextNode("new MultiSelectTag('inputStock', {rounded: true, shadow: false, placeholder: 'Pesquisar', tagColor: {textColor: '#327b2c', borderColor: '#92e681', bgColor: '#eaffe6'}})");
    newTag.appendChild(newContent);
    document.body.appendChild(newTag);
    document.getElementById('inputStock')!.style.display = 'none';
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
      this.handleModal('success', 'Produto excluído com sucesso.');
      this.router.navigateByUrl('/product/productList');
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
          this.productService.createProduct(productModel).subscribe((createProductModel: ProductModel) => {
            this.buttons.push({
              name: 'EXCLUIR',
              link: '/product/productList',
              class: 'btn-danger',
              iconButton: {} as IconDefinition,
              type: 'DELETE'
            })
            this.productId = createProductModel.productId;
            let select = document.getElementById('inputStock');
            let stockModel = {} as StockModel;
            for (let index = 0; index < select!.children.length; index++) {
              var option = (<HTMLOptionElement>select!.children[index])
              if (option.selected) {
                stockModel.productId = this.productId;
                stockModel.companyId = String(option.value.substring(option.value.indexOf("'") + 1, option.value.length - 1));
                this.stockService.createStock(stockModel).subscribe(() => { },
                  error => {
                    this.handleModal('danger', error);
                  });
              }
            }
            this.handleModal('success', 'Produto criado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }
        else {
          this.productService.updateProduct(this.productId, productModel).subscribe(() => {
            let select = document.getElementById('inputStock');
            let stockModel = {} as StockModel;
            for (let index = 0; index < select!.children.length; index++) {
              var option = (<HTMLOptionElement>select!.children[index])
              if (option.selected) {
                stockModel.productId = this.productId;
                stockModel.companyId = String(option.value.substring(option.value.indexOf("'") + 1, option.value.length - 1));
                this.stockService.createStock(stockModel).subscribe(() => { },
                  error => {
                    this.handleModal('danger', error);
                  });
              }
            }
            this.handleModal('success', 'Produto atualizado com sucesso.');
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
