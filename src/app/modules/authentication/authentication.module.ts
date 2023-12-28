import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
