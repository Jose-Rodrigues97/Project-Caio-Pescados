import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCustomerComponent } from './components/card-customer/card-customer.component';
import { CustomersComponent } from './customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardCustomerComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
