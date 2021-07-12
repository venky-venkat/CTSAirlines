import { TestBed } from '@angular/core/testing';

import { FlightdetailsService } from './flightdetails.service';

describe('FlightdetailsService', () => {
  let service: FlightdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
