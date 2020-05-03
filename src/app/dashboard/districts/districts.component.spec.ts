import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsComponent } from './districts.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidDistrictDataService } from 'src/app/core/services/districtService/covid-district-data.service';

describe('DistrictsComponent', () => {
  let component: DistrictsComponent;
  let fixture: ComponentFixture<DistrictsComponent>;

  const mockDistrictService = jasmine.createSpyObj('CovidDistrictDataService', ['getCovidDistrictData']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictsComponent ],
      imports: [HttpClientModule],
      providers: [CovidDistrictDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
