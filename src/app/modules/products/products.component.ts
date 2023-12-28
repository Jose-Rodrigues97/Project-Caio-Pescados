import { Component } from '@angular/core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 20, price: 10.00 },
    { id: 2, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 10, price: 10.00 },
    { id: 3, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 100, price: 10.00 },
    { id: 4, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 64, price: 10.00 },
    { id: 5, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 94, price: 10.00 },
    { id: 6, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 64, price: 10.00 },
    { id: 7, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 84.53, price: 19.99 },
    { id: 8, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 48, price: 13.00 },
    { id: 9, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 32, price: 11.50 },
    { id: 10, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", description: "Tainha é a designação vulgar de vários peixes da família dos mugilídeos. A maior parte das espécies pertence ao gênero Mugil, mas a designação estende-se a outros géneros. Distribuem-se por todo o mundo, ocupando águas costeiras temperadas ou tropicais, existindo algumas espécies que vivem também em água doce.", stock: 0.4, price: 15.00 },
  ]
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  formGroup!: FormGroup;
  isAdvancedFilterOpen = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: null,
      hasStock: null,
      price: null,
      typePrice: null,
      typeStock: null,
      stock: null,
    })
  }

  changeAdvancedFilter() {
    this.isAdvancedFilterOpen = !this.isAdvancedFilterOpen;
  }

  onSubmit(): void {

  }

  onClean() {
    this.formGroup.reset();
  }
}