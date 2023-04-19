import { TestBed } from '@angular/core/testing';

import { MoneybalanceService } from './moneybalance.service';

describe('MoneybalanceService', () => {
  let service: MoneybalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneybalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
