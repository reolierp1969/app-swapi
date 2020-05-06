import { TestBed } from '@angular/core/testing';

import { NavesespacialesService } from './navesespaciales.service';

describe('NavesespacialesService', () => {
  let service: NavesespacialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavesespacialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
