import { TestBed } from '@angular/core/testing';

import { NgKingService } from './ng-king.service';

describe('NgKingService', () => {
  let service: NgKingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgKingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
