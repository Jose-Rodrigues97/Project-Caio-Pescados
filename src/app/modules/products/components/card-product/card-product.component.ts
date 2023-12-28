import { Component, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { faMoneyBillWave, faDolly } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})

export class CardProductComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() id!: number;
  @Input() stock!: number;
  @Input() price!: number;
  faDolly = faDolly;
  faMoneyBillWave = faMoneyBillWave;

  ngOnInit() {
    window.addEventListener("load", function () {
      let dataBS = `[data-bs-toggle="{{id}}"]`;
      const tooltipTriggerList = document.querySelectorAll(dataBS);
      for (let index = 0; index < tooltipTriggerList.length; index++) {
        new bootstrap.Tooltip(tooltipTriggerList[index]);
      }
    });
  }
}
