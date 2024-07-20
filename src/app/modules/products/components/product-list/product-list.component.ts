import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IconDefinition, faPlusCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { ProductService } from "../../service/product.service";
import { ProductsModel } from "../../models/products-model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  buttons = [
    {
      name: 'CRIAR PRODUTO',
      link: 'product/productDetail/',
      class: 'btn-primary',
      iconButton: faPlusCircle,
      type: 'CREATE'
    }]

  formGroup!: FormGroup;
  products$!: Observable<ProductsModel>
  bsModalRef?: BsModalRef;
  faPlus = faPlusCircle;
  faShare = faShare;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        name: '',
        hasStock: '',
        price: '',
        typePrice: '',
        stock: '',
        typeStock: ''
      });
  }

  ngOnInit() {
    this.getProducts();
    this.formGroup = this.formBuilder.group({
      text: ''
    })
  }

  ngOnSubmit(): void {

  }

  getProducts() {
    this.products$ = this.productService.getProducts();
  }

  onClean() {
    this.formGroup.reset();
  }
}
