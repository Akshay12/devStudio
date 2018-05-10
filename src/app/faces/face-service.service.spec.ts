import { TestBed, inject } from '@angular/core/testing';

import { FaceService } from './../services/member-service.service.ts';

describe('FaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceService]
    });
  });

  it('should be created', inject([FaceService], (service: FaceService) => {
    expect(service).toBeTruthy();
  }));
});
