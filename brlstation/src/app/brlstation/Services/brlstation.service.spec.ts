import { TestBed } from '@angular/core/testing';

import { BrlStationService } from './brlstation.service';

describe('BrlStationService', () => {
  let service: BrlStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrlStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
