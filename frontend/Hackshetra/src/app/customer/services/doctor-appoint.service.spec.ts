import { TestBed } from '@angular/core/testing';

import { DoctorAppointService } from './doctor-appoint.service';

describe('DoctorAppointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorAppointService = TestBed.get(DoctorAppointService);
    expect(service).toBeTruthy();
  });
});
