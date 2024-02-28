import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { TokenModel } from '../../models/token-model';

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
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required]),
      check: false
    });
  }

  get login() {
    return this.formGroup.get("login")!;
  }

  get password() {
    return this.formGroup.get("password")!;
  }

  ngOnSubmit() {
    if (this.formGroup.get('login')?.valid) {
      if (this.formGroup.get('password')?.valid) {
        if (!this.formGroup.get('check')?.value) {
          this.handleModal('info', 'Realize a checagem.');
        } else {
          this.accountService.login(this.formGroup.value).pipe().subscribe((response) => {
            window.localStorage.setItem('Token', response.token);
            this.router.navigate(['company']);
            this.handleModal('success', 'Bem-vindo.');
            console.log(this.router)
          },
            error => {
              this.handleModal('danger', error.error);
            }
          );
        }
      }
    }
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}