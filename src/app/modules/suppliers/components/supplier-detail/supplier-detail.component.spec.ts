import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailComponent } from './supplier-detail.component';

describe('FormSupplierComponent', () => {
  let component: SupplierDetailComponent;
  let fixture: ComponentFixture<SupplierDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierDetailComponent]
    });
    fixture = TestBed.createComponent(SupplierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
