import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStockCardComponent } from './product-stock-card.component';

describe('ProductStockCardComponent', () => {
  let component: ProductStockCardComponent;
  let fixture: ComponentFixture<ProductStockCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductStockCardComponent]
    });
    fixture = TestBed.createComponent(ProductStockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
