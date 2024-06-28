import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsStockComponent } from './list-products-stock.component';

describe('ListProductsStockComponent', () => {
  let component: ListProductsStockComponent;
  let fixture: ComponentFixture<ListProductsStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsStockComponent]
    });
    fixture = TestBed.createComponent(ListProductsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
