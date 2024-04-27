import { TestBed } from '@angular/core/testing';

import { CollaboratorService } from './collaborator-service.service';

describe('CollaboratorServiceService', () => {
  let service: CollaboratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollaboratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
