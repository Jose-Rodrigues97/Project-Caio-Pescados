import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailComponent } from './stock-product-detail.component';

describe('StockDetailComponent', () => {
  let component: StockDetailComponent;
  let fixture: ComponentFixture<StockDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockDetailComponent]
    });
    fixture = TestBed.createComponent(StockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
