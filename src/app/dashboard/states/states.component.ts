import { Component, OnInit, Input, Output } from '@angular/core';
import { CovidStatesDataService } from 'src/app/core/services/stateService/covid-states-data.service';
import { ICovid } from 'src/app/shared/interfaces/ICovid';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StatesComponent implements OnInit {

  constructor(private covidStatesDataService: CovidStatesDataService) {
  }
  @Output()
  expandedstateData: ICovid | null;
  columnsToDisplay: string[] = ['state', 'confirmed', 'active', 'recovered', 'deaths'];
  countryData: ICovid;
  @Output()
  statesData: ICovid[];
  ngOnInit(): void {
    this.covidStatesDataService.getCovidStatesData().subscribe((data: any) => {
      this.statesData = Object(data.statewise.slice(1));
      this.countryData = Object(data.statewise.slice(0, 1)[0]);
      console.log(this.countryData);
    });
  }

}
