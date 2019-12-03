import { Component } from '@angular/core';

@Component({
  selector: 'app-about-tab',
  templateUrl: 'about-tab.html',
  styleUrls: ['about-tab.scss']
})
export class AboutTabPage {

  constructor() {}

  openLink(url: string) {
    window.open(url, '_system');
  }
}
