import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IconDefinition, faPlusCircle, faShare } from "@fortawesome/free-solid-svg-icons";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { ProductService } from "../../service/product.service";
import { ProductsModel } from "../../models/ProductsModel";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  buttons = [
    {
      name: 'CRIAR FORNECEDOR',
      link: 'product/productDetail/',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
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
  }

  ngOnInit() {
    this.getProducts();
    this.formGroup = this.formBuilder.group({
      text: ''
    })
  }

  onSubmit(): void {

  }

  getProducts() {

    this.products$ = this.productService.getProducts();

  }

  onClean() {
    this.formGroup.reset();
  }
}
