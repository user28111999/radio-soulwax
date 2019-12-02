import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-cover',
  templateUrl: 'radio-cover.html',
  styleUrls: ['radio-cover.scss']
})
export class RadioCoverComponent {
  @Input() radio: Radio;

  constructor() {}

}
