import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCompanyCardComponent } from './shipping-company-card.component';

describe('ShippingCompanyCardComponent', () => {
  let component: ShippingCompanyCardComponent;
  let fixture: ComponentFixture<ShippingCompanyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingCompanyCardComponent]
    });
    fixture = TestBed.createComponent(ShippingCompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
