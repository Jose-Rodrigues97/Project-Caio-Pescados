import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CompaniesModel } from 'src/app/modules/companies/models/companies-model';
import { CompanyService } from 'src/app/modules/companies/services/company.service';

@Component({
  selector: 'app-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent {
  formGroup!: FormGroup;
  companies$!: Observable<CompaniesModel>;
  buttons = [
    {
      name: 'CRIAR EMPRESA',
      link: 'company/companyDetail/',
      class: 'btn-primary',
      iconButton: faPlusCircle,
      type: 'CREATE'
    }] 

  constructor(private companyService: CompanyService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  onSubmit(): void {

  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  onClean() {
    this.formGroup.reset();
  }
}
