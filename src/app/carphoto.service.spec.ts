import { TestBed } from '@angular/core/testing';

import { CarphotoService } from './carphoto.service';

describe('CarphotoService', () => {
  let service: CarphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
