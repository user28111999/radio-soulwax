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

  constructor(
    public radioProvider: RadioProvider
  ) {}

  ngOnInit() {
    this.radios$ = this.radioProvider.getAll$();
  }

  sort(event) {
    console.log(event);
  }
}
