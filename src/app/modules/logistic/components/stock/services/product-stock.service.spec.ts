import { TestBed } from '@angular/core/testing';

import { ProductStockService } from './product-stock.service';

describe('ProductService', () => {
  let service: ProductStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
