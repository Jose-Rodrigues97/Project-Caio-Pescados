import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { AccountService } from '../../services/account.service';
import { CreateAccountModel } from '../../models/create-account-model';
import { ErrorModel } from 'src/app/models/error/error-model';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private accountService: AccountService,
    private router: Router) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    const tooltipTriggerList = document.querySelectorAll('#labelPassword')!;
    for (let index = 0; index < tooltipTriggerList.length; index++) {
      new bootstrap.Tooltip(tooltipTriggerList[index]);
    }
  }

  get name() {
    return this.formGroup.get("name")!;
  }

  get email() {
    return this.formGroup.get("email")!;
  }

  get login() {
    return this.formGroup.get("login")!;
  }

  get password() {
    return this.formGroup.get("password")!;
  }

  get confirmPassword() {
    return this.formGroup.get("confirmPassword")!;
  }

  ngOnSubmit() {
    try {
      if (this.formGroup.valid) {
        if (this.formGroup.get("password")?.value == this.formGroup.get("confirmPassword")?.value) {

          let createUser = {} as CreateAccountModel;
          createUser.email = this.formGroup.get("email")?.value;
          createUser.login = this.formGroup.get("login")?.value;
          createUser.name = this.formGroup.get("name")?.value;
          createUser.password = this.formGroup.get("password")?.value;
          createUser.role = 'USER';
          this.accountService.createAccount(createUser).subscribe(() => {
            this.router.navigate(['login']);
            this.handleModal('success', 'Conta criada com sucesso.');
          },
            error => {
              let erro: ErrorModel;
              erro = error;
              this.handleModal('danger', erro.message);
            });
        } else {
          this.handleModal('info', 'As senhas não coincidem.');
        }
      } else {
        this.handleModal('warning', 'Formulário inválido.');
      }

    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
