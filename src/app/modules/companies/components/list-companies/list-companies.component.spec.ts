import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompaniesComponent } from './list-companies.component';

describe('ListCompaniesComponent', () => {
  let component: ListCompaniesComponent;
  let fixture: ComponentFixture<ListCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCompaniesComponent]
    });
    fixture = TestBed.createComponent(ListCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
