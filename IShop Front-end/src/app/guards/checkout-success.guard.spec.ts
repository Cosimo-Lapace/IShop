import { TestBed } from '@angular/core/testing';

import { CheckoutSuccessGuard } from './checkout-success.guard';

describe('CheckoutSuccessGuard', () => {
  let guard: CheckoutSuccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckoutSuccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
