import { TestBed } from '@angular/core/testing';

import { TripCalService } from './trip-cal.service';

describe('TripCalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripCalService = TestBed.get(TripCalService);
    expect(service).toBeTruthy();
  });
});
