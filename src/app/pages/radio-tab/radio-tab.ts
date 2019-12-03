import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RadioProvider } from 'src/app/core/providers/radio';
import { Radio } from 'src/app/core/models/radio.model';

@Component({
  selector: 'app-radio-tab',
  templateUrl: 'radio-tab.html',
  styleUrls: ['radio-tab.scss']
})
export class RadioTabPage implements OnInit {
  radios$: Observable<Radio[]>;

  private filterTypes = [
    {
      key: 'popularity',
      value: 'Popularity'
    },
    {
      key: 'alphabetical',
      value: 'Alphabetical'
    },
    {
      key: 'date',
      value: 'Release Date'
    }
  ];

  constructor(
    public radioProvider: RadioProvider
  ) {}

  ngOnInit() {
    this.radios$ = this.radioProvider.getAllByPopularity$();
  }

  sortBy(value: string) {
    switch(value) {
      case 'Popularity':
        this.radios$ = this.radioProvider.getAllByPopularity$();
        break;
      case 'Alphabetical':
        this.radios$ = this.radioProvider.getAll$();
        break;
      case 'Release Date':
        this.radios$ = this.radioProvider.getAllByDate$();
        break;
      default:
        this.radios$ = this.radioProvider.getAllByPopularity$();
    }
  }

  navigate(event) {
    console.log(event);
  }
}
