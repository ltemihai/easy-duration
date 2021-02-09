import { TestBed } from '@angular/core/testing';

import { EasyDurationService } from './easy-duration.service';

describe('EasyDurationService', () => {
  let service: EasyDurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyDurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
