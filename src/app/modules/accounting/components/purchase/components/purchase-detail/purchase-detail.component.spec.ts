import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDetailComponent } from './purchase-detail.component';

describe('PurchaseDetailComponent', () => {
  let component: PurchaseDetailComponent;
  let fixture: ComponentFixture<PurchaseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseDetailComponent]
    });
    fixture = TestBed.createComponent(PurchaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
