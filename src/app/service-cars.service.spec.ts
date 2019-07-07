import { TestBed } from '@angular/core/testing';

import { ServiceCarsService } from './service-cars.service';

describe('ServiceCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCarsService = TestBed.get(ServiceCarsService);
    expect(service).toBeTruthy();
  });
});
