import { Component, Input } from '@angular/core';

import { Radio } from 'src/app/core/models/radio.model';

@Component({
  selector: 'app-radio-cover',
  templateUrl: 'radio-cover.html',
  styleUrls: ['radio-cover.scss']
})
export class RadioCoverComponent {
  @Input() radio: Radio;

  constructor() {}

}
