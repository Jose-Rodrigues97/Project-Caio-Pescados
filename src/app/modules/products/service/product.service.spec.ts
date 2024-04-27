import { TestBed } from '@angular/core/testing';

import { ProductServiceTsService } from './product.service';

describe('ProductServiceTsService', () => {
  let service: ProductServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
