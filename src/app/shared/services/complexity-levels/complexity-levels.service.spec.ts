import { TestBed } from '@angular/core/testing';

import { ComplexityLevelsService } from './complexity-levels.service';

describe('ComplexityLevelsService', () => {
  let service: ComplexityLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplexityLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
