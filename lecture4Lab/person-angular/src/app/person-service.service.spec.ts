import { TestBed } from '@angular/core/testing';

import { PersonServiceService } from './person-service.service';

describe('PersonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonServiceService = TestBed.get(PersonServiceService);
    expect(service).toBeTruthy();
  });
});
