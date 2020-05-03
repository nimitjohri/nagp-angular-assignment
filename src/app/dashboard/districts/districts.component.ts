import { Component, OnInit, Input, Output } from '@angular/core';
import { CovidDistrictDataService } from 'src/app/core/services/districtService/covid-district-data.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})
export class DistrictsComponent implements OnInit {

  constructor(private covidDistrictDataService: CovidDistrictDataService) { }

  @Input()
  stateName;
  @Output()
  districtWiseData: any;
  ngOnInit(): void {
    this.covidDistrictDataService.getCovidDistrictData().subscribe((data: any) => {
      this.districtWiseData = data[this.stateName];
    });
}


  getStateDistrictWiseData(stateName: string){
  }
}
