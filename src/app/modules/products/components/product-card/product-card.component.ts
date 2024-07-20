import { Component, Input, OnInit } from '@angular/core';
import { faMoneyBillWave, faDolly } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../models/product-model';
import { DatePipe, formatDate } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-product',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class CardProductComponent implements OnInit {
  @Input() product!: ProductModel;
  faDolly = faDolly;
  faMoneyBillWave = faMoneyBillWave;
  cardNew!: boolean;
  formGroup!: FormGroup;

  constructor(private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      creationDate: '',
    });
  }

  ngOnInit(): void {
    var day = Number(String(this.product.creationDate).split(',')[2]);
    var month = Number(String(this.product.creationDate).split(',')[1]);
    var year = Number(String(this.product.creationDate).split(',')[0]);
    var creationDate = new Date();
    creationDate.setDate(day);
    creationDate.setFullYear(year);
    creationDate.setMonth(month-1);
    creationDate.setDate(creationDate.getDate() + 8);
    var dateCurrent = new Date();
    console.log(creationDate.toDateString())
    if (creationDate > dateCurrent) {
      this.cardNew = true;
    }
  }
}
