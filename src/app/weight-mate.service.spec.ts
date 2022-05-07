import { TestBed } from '@angular/core/testing';

import { WeightMateService } from './weight-mate.service';

describe('WeightMateService', () => {
  let service: WeightMateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightMateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
