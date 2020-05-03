import { TestBed, inject } from '@angular/core/testing';

import { CovidDistrictDataService } from './covid-district-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CovidDistrictDataService', () => {
  let service: CovidDistrictDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CovidDistrictDataService
      ]
    });
    service = TestBed.inject(CovidDistrictDataService);
  });

  it('should return districtwise data of all states',
  inject([HttpTestingController],
    (httpMock: HttpTestingController) => {
      service.getCovidDistrictData().subscribe((data: any[]) => {
        expect(data.length).toBe(38);
      });
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
