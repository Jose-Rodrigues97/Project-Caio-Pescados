import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent {
  @Input() id!: number;
  formGroup!: FormGroup;
  buttons = [
  {
    name: 'VOLTAR',
    link: '/suppliers',
    class: 'btn-secondary'
  },
  {
    name: 'SALVAR',
    link: '/supplierDetail/',
    class: 'btn-primary'
  }]

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      cnpj: '',
      stateRegistration:'',
      branch: '',
      street: '',
      numberStreet: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      nameUser: '',
      telephone: '',
      email: ''
    });
    this.formGroup.controls["name"].addValidators([Validators.required, Validators.minLength(5)]);
    this.formGroup.controls["cnpj"].addValidators([Validators.required, Validators.minLength(13)]);
    this.formGroup.controls["telephone"].addValidators([Validators.required]);
    this.formGroup.controls["email"].addValidators([Validators.required]);

  }
  get name(){
    return this.formGroup.get("name")!;
  }
  get cnpj(){
    return this.formGroup.get("cnpj")!;
  }
  get stateRegistration(){
    return this.formGroup.get("stateRegistration")!;
  }
  get branch(){
    return this.formGroup.get("branch")!;
  }
  get street(){
    return this.formGroup.get("street")!;
  }
  get numberStreet(){
    return this.formGroup.get("numberStreet")!;
  }
  get city(){
    return this.formGroup.get("city")!;
  }
  get estate(){
    return this.formGroup.get("estate")!;
  }
  get country(){
    return this.formGroup.get("country")!;
  }
  get zipCode(){
    return this.formGroup.get("zipCode")!;
  }
  get complement(){
    return this.formGroup.get("complement")!;
  }
  get nameUser(){
    return this.formGroup.get("nameUser")!;
  }
  get telephone(){
    return this.formGroup.get("telephone")!;
  }
  get email(){
    return this.formGroup.get("email")!;
  }

  ngOnSubmit(event:any){
    if(this.formGroup.invalid){
      return;
    }
    console.log("submit");
  }
}
