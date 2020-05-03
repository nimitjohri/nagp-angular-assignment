import { TestBed, inject } from '@angular/core/testing';

import { CovidStatesDataService } from './covid-states-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ICovid } from 'src/app/shared/interfaces/ICovid';

describe('CovidStatesDataService', () => {
  let service: CovidStatesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CovidStatesDataService
      ]
    });
    service = TestBed.inject( CovidStatesDataService);
  });


  it('it should return all states ',
  inject ([HttpTestingController],
    (httpMock: HttpTestingController) => {
      service.getCovidStatesData().subscribe((data: ICovid[]) => {
        expect(data.length).toBe(38);
      });

      const mockRequest = httpMock.expectOne(service.apiUrl);
      expect(mockRequest.request.method).toEqual('GET');
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
