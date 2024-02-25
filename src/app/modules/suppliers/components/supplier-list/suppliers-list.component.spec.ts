import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListComponent } from './suppliers-list.component';

describe('SupplierListComponent', () => {
  let component: SupplierListComponent;
  let fixture: ComponentFixture<SupplierListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierListComponent]
    });
    fixture = TestBed.createComponent(SupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
