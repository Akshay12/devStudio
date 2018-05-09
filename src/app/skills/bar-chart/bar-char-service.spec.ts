import { TestBed, inject } from '@angular/core/testing';

import { barChartService } from './bar-chart-service';

describe('FaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [barChartService]
    });
  });

  it('should be created', inject([barChartService], (service: barChartService) => {
    expect(service).toBeTruthy();
  }));
});