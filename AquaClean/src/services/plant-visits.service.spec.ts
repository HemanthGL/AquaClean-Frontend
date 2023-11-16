import { TestBed } from '@angular/core/testing';

import { PlantVisitsService } from './plant-visits.service';

describe('PlantVisitsService', () => {
  let service: PlantVisitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantVisitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
