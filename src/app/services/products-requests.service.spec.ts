import { TestBed } from '@angular/core/testing';

import { ProductsRequestsService } from './products-requests.service';

describe('ProductsRequestsService', () => {
  let service: ProductsRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
