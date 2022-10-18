import { TestBed } from '@angular/core/testing';

import { KinozalService } from './kinozal.service';

describe('KinozalService', () => {
  let service: KinozalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinozalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
