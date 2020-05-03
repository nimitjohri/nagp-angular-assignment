import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesComponent } from './states.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovidDistrictDataService } from 'src/app/core/services/districtService/covid-district-data.service';
import { of } from 'rxjs';
import { CovidStatesDataService } from 'src/app/core/services/stateService/covid-states-data.service';

describe('StatesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;
  // const stateService = jasmine.createSpyObj('CovidStatesDataService', ['getCovidStatesData']);

  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [ StatesComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      // providers: [
      //   {provide: CovidStatesDataService, useValue: stateService}
      // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // const testCovidStateData = [
    //   {
    //     active: 123,
    //     confirmed: 128,
    //     deaths: 12
    //   },
    //   {
    //     active: 111,
    //     confirmed: 119,
    //     deaths: 11
    //   }
    // ];
    // const getCovidStatesDataSpy = stateService.getCovidStatesData.and.returnValue( of(testCovidStateData) );
    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should have state count equal 37', () => {
  //   const stateService = fixture.debugElement.injector.get(CovidDistrictDataService);
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   expect(stateService.getCovidDistrictData().subscribe((data: any) => {
  //     this.stateCount = Object(data.statewise.slice(1));
  //   }));
  // });

  // it('should call getCovidStatesData() on init', () => {
  //   const covidStateSpy = spyOn(stateService, 'getCovidStatesData').and.callThrough();

  //   expect(covidStateSpy).not.toHaveBeenCalled();

  //   component.ngOnInit();
  //   expect(covidStateSpy).toHaveBeenCalledTimes(1);
  // });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
