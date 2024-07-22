import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { PopupModalComponent } from 'src/app/modules/authentication/components/popup-modal/popup-modal-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;

  constructor(private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: BsModalService) {
    this.formGroup = this.formBuilder.group({
      taxNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      password: new FormControl('', [Validators.required]),
      check: false
    });
  }

  get taxNumber() {
    return this.formGroup.get("taxNumber")!;
  }

  get password() {
    return this.formGroup.get("password")!;
  }

  ngOnSubmit() {
    if (this.formGroup.get('taxNumber')?.valid) {
      if (this.formGroup.get('password')?.valid) {
        if (!this.formGroup.get('check')?.value) {
          this.handleModal('info', 'Realize a checagem.');
        } else {
          this.accountService.login(this.formGroup.value).pipe().subscribe((response) => {
            window.localStorage.setItem('Token', response.token);
            this.router.navigate(['company']);
            this.handleModal('success', 'Bem-vindo.');
          },
            error => {
              this.handleModal('danger', error.error);
            }
          );
        }
      }
    } else {
      this.handleModal('warning', 'Formulário inválido.');
    }
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }

  handlePopup(title: string) {
    this.bsModalRef = this.modalService.show(PopupModalComponent);
    this.bsModalRef.content.title = title;
  }
}