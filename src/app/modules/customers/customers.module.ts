import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCustomerComponent } from './components/card-customer/card-customer.component';
import { CustomersComponent } from './customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemesModule } from "../themes/themes.module";
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';



@NgModule({
    declarations: [
        CardCustomerComponent,
        CustomersComponent,
        CustomerDetailComponent,
        ListCustomersComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ThemesModule,
        FontAwesomeModule, 
        RouterModule,
        CustomersRoutingModule
    ]
})
export class CustomersModule { }
