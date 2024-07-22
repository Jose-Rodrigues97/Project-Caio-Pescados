import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { properties } from '../../properties/properties';
import { CollaboratorService } from '../../services/collaborator-service.service';
import { ImageService } from 'src/app/modules/themes/components/upload/services/image.service';
import { DatePipe } from '@angular/common';
import { PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { ErrorModel } from 'src/app/models/error/error-model';
import { AlertModalComponent } from 'src/app/modules/themes/components/alert-modal-component/alert-modal.component';
import { CollaboratorModel } from '../../models/collaborator-model';
import { AddressModel } from 'src/app/models/address/address-model';
import { TelephoneModel } from 'src/app/models/telephone/telephone-model';
import { CollaboratorExtensionModel } from '../../models/collaborator-extension-model';

@Component({
  selector: 'app-collaborator-detail',
  templateUrl: './collaborator-detail.component.html',
  styleUrls: ['./collaborator-detail.component.css']
})
export class CollaboratorDetailComponent implements OnInit, AfterViewChecked {
  @Input() id: string = '';
  bsModalRef?: BsModalRef;
  formGroup!: FormGroup;
  submitted: boolean = false;
  imageId!: string;
  image!: Blob;
  isViewEmployeeWorkScheduleDashboard = properties.isViewEmployeeWorkScheduleDashboard;
  buttons = [
    {
      name: 'SALVAR',
      link: '',
      class: 'btn-primary',
      iconButton: {} as IconDefinition,
      type: 'SAVE'
    }, {
      name: 'VOLTAR',
      link: '/collaborator/collaboratorsList',
      class: 'btn-secondary',
      iconButton: {} as IconDefinition,
      type: 'RETURN'
    }
  ]

  constructor(private formBuilder: FormBuilder,
    private collaboratorService: CollaboratorService,
    private imageService: ImageService,
    private modalService: BsModalService,
    private datepipe: DatePipe,
    private router: Router) {
    const s: UrlSegment = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments[2];
    this.id = String(s.path);
    this.formGroup = this.formBuilder.group({
      id: this.id,
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      taxNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      surname: '',
      rg: '',
      birthday: '',
      office: '',
      turn: '',
      salary: '',
      addressId: '',
      address: '',
      city: '',
      estate: '',
      country: '',
      zipCode: '',
      complement: '',
      addresObjectId: '',
      addresObjectType: '',
      homePhone: '',
      cellPhone: '',
      email: '',
      totalCollaborators: '',
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sundayStart: { value: '', disabled: true },
      mondayStart: { value: '', disabled: true },
      tuesdayStart: { value: '', disabled: true },
      wednesdayStart: { value: '', disabled: true },
      thursdayStart: { value: '', disabled: true },
      fridayStart: { value: '', disabled: true },
      saturdayStart: { value: '', disabled: true },
      sundayEnd: { value: '', disabled: true },
      mondayEnd: { value: '', disabled: true },
      tuesdayEnd: { value: '', disabled: true },
      wednesdayEnd: { value: '', disabled: true },
      thursdayEnd: { value: '', disabled: true },
      fridayEnd: { value: '', disabled: true },
      saturdayEnd: { value: '', disabled: true },
      image: Blob,
    });
  }

  ngOnInit(): void {
    if (this.formGroup.get('id')?.value !== '') {
      this.getCollaboratorById(this.formGroup.get('id')?.value);
      this.buttons.push({
        name: 'EXCLUIR',
        link: '/collaborator/collaboratorList',
        class: 'btn-danger',
        iconButton: {} as IconDefinition,
        type: 'DELETE'
      });
    }
  }

  ngAfterViewChecked(): void {
    this.onChangeName(document.getElementById('name'));
    this.onChangeTaxNumber(document.getElementById('taxNumber'));
  }

  onChangeName(target: any) {
    if (target) {
      if (this.name.errors) {
        (<HTMLInputElement>target).classList.remove('is-valid');
        (<HTMLInputElement>target).classList.add('is-invalid');
      } else {
        (<HTMLInputElement>target).classList.add('is-valid');
        (<HTMLInputElement>target).classList.remove('is-invalid');
      }
    }
  }

  onChangeTaxNumber(target: any) {
    if (target) {
      if (this.taxNumber.errors) {
        (<HTMLInputElement>target).classList.remove('is-valid');
        (<HTMLInputElement>target).classList.add('is-invalid');
      } else {
        (<HTMLInputElement>target).classList.add('is-valid');
        (<HTMLInputElement>target).classList.remove('is-invalid');
      }
    }
  }

  get name() {
    return this.formGroup.get("name")!;
  }

  get taxNumber() {
    return this.formGroup.get("taxNumber")!;
  }

  onClickButton(type: string) {
    if (type == 'DELETE') {
      this.onDeleteUser();
    } else {
      this.ngOnSubmit();
    }
  }

  onDeleteUser() {
    let exclude = confirm("Deseja realmente excluir o colaborador?");
    if (exclude) {
      this.collaboratorService.deleteUser(this.id).subscribe(() => {
        this.router.navigateByUrl('/collaborator/collaboratorsList');
        this.handleModal('success', 'Colaborador excluído com sucesso.');
      },
        error => {
          this.handleModal('danger', error);
        });
    }
  }

  ngOnSubmit() {
    try {
      this.submitted = true;
      if (this.formGroup.valid) {
        let collaboratorModel = {} as CollaboratorModel;
        collaboratorModel.role = 'USER';
        collaboratorModel.name = this.formGroup.get('name')?.value;
        collaboratorModel.surname = this.formGroup.get('surname')?.value;
        collaboratorModel.email = this.formGroup.get('email')?.value;
        collaboratorModel.taxNumber = this.formGroup.get('taxNumber')?.value;
        let collaboratorExtensionModel = {} as CollaboratorExtensionModel;
        collaboratorModel.userExtensionModel = collaboratorExtensionModel;
        collaboratorExtensionModel.birthday = this.formGroup.get('birthday')?.value;
        collaboratorExtensionModel.office = this.formGroup.get('office')?.value;
        collaboratorExtensionModel.salary = this.formGroup.get('salary')?.value;
        collaboratorExtensionModel.turn = this.formGroup.get('turn')?.value;
        collaboratorExtensionModel.rg = this.formGroup.get('rg')?.value;
        let collaboratorAddressModel = {} as AddressModel;
        collaboratorAddressModel.addressId = this.formGroup.get('addressId')?.value;
        collaboratorAddressModel.address = this.formGroup.get('address')?.value;
        collaboratorAddressModel.cep = this.formGroup.get('zipCode')?.value;
        collaboratorAddressModel.city = this.formGroup.get('city')?.value;
        collaboratorAddressModel.complement = this.formGroup.get('complement')?.value;
        collaboratorAddressModel.country = this.formGroup.get('country')?.value;
        collaboratorAddressModel.estate = this.formGroup.get('estate')?.value;
        collaboratorAddressModel.objectType = this.formGroup.get('addresObjectType')?.value;
        collaboratorAddressModel.objectId = this.formGroup.get('addresObjectId')?.value;
        collaboratorModel.address = collaboratorAddressModel;
        let telephonesModel = [] as TelephoneModel[];
        if (this.formGroup.get('homePhone')?.value) {
          let telephoneModel = {} as TelephoneModel;
          telephoneModel.number = this.formGroup.get('homePhone')?.value;
          telephoneModel.prefix = Number(String(this.formGroup.get('homePhone')?.value).substring(0, 2));
          telephoneModel.type = 'HOME';
          telephonesModel.push(telephoneModel);
        }
        if (this.formGroup.get('cellPhone')?.value) {
          let telephoneModel = {} as TelephoneModel;
          telephoneModel.number = this.formGroup.get('cellPhone')?.value;
          telephoneModel.prefix = Number(String(this.formGroup.get('cellPhone')?.value).substring(0, 2));
          telephoneModel.type = 'CELL';
          telephonesModel.push(telephoneModel);
        }
        collaboratorModel.telephones = telephonesModel;
        if (this.id == '') {
          this.collaboratorService.createUser(collaboratorModel).subscribe((collaborator: CollaboratorModel) => {
            this.buttons.push({
              name: 'EXCLUIR',
              link: '/collaborator/collaboratorsList',
              class: 'btn-danger',
              iconButton: {} as IconDefinition,
              type: 'DELETE'
            })
            this.id = collaboratorModel.userId;
            this.handleModal('success', 'Colaborador criado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }
        else {
          this.collaboratorService.updateUser(this.id, collaboratorModel).subscribe(() => {
            this.handleModal('success', 'Colaborador atualizado com sucesso.');
          },
            error => {
              this.handleModal('danger', error);
            });
        }
        var formData = new FormData();
        if (this.formGroup.get('image')?.value) {
          formData.append('objectId', this.id);
          formData.append('objectType', 'COMPANY');
          if (this.imageId) {
            formData.append('imageId', this.imageId);
            this.imageService.updateImage(this.imageId, formData);
          } else {
            this.imageService.createImage(formData);
          }
        }
      } else {
        this.handleModal('danger', 'Formulário inválido.');
      }
    } catch (error) {
      this.handleModal('danger', String(error));
    }
  }

  getCollaboratorById(companyId: string) {
    this.collaboratorService.getUserById(companyId).subscribe((collaborator: CollaboratorModel) => {
      this.formGroup.get('name')?.setValue(collaborator.name);
      this.formGroup.get('surname')?.setValue(collaborator.surname);
      this.formGroup.get('taxNumber')?.setValue(collaborator.taxNumber);
      this.formGroup.get('email')?.setValue(collaborator.email);
      if(collaborator.userExtensionModel){
        this.formGroup.get('birthday')?.setValue(collaborator.userExtensionModel.birthday);
        this.formGroup.get('office')?.setValue(collaborator.userExtensionModel.office);
        this.formGroup.get('salary')?.setValue(collaborator.userExtensionModel.salary);
        this.formGroup.get('turn')?.setValue(collaborator.userExtensionModel.turn);
        this.formGroup.get('rg')?.setValue(collaborator.userExtensionModel.rg);
      }
      if (collaborator.address) {
        this.formGroup.get('addressId')?.setValue(collaborator.address.addressId);
        this.formGroup.get('address')?.setValue(collaborator.address.address);
        this.formGroup.get('city')?.setValue(collaborator.address.city);
        this.formGroup.get('estate')?.setValue(collaborator.address.estate);
        this.formGroup.get('country')?.setValue(collaborator.address.country);
        this.formGroup.get('zipCode')?.setValue(collaborator.address.cep);
        this.formGroup.get('complement')?.setValue(collaborator.address.complement);
        this.formGroup.get('addresObjectId')?.setValue(collaborator.address.objectId);
        this.formGroup.get('addresObjectType')?.setValue(collaborator.address.objectType);
      }
      if (collaborator.telephones) {
        for (let index = 0; index < collaborator.telephones.length; index++) {
          if (collaborator.telephones[index].type == 'HOME') {
            this.formGroup.get('homePhone')?.setValue(collaborator.telephones[index].number);
          } else {
            this.formGroup.get('cellPhone')?.setValue(collaborator.telephones[index].number);
          }
        }
      }
    },
      error => {
        let erro: ErrorModel;
        erro = error;
        this.handleModal('danger', erro.message);
      });
  }

  handleModal(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
