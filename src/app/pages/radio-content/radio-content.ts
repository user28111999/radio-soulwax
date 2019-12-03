import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { RadioProvider } from 'src/app/core/providers/radio';
import { Radio } from 'src/app/core/models/radio.model';

@Component({
  selector: 'app-radio-content',
  templateUrl: 'radio-content.html',
  styleUrls: ['radio-content.scss']
})
export class RadioContentPage implements OnInit, OnDestroy {
  radio$: Observable<Radio>;
  subRadio: Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private radioProvider: RadioProvider
  ) {}

  ngOnInit() {
    this.subRadio = this.route.params.subscribe(params => {
      this.radio$ = this.radioProvider.get$(params.radioUid);
    });
  }

  sanitizeVimeo(vimeoUid: number) {
    const vimeoEmbed = 'https://player.vimeo.com/video/' + vimeoUid + '?byline=false&title=false&responsive=true';
    return this.sanitizer.bypassSecurityTrustResourceUrl(vimeoEmbed);
  }

  goBack() {
    this.router.navigate(['tabs', 'radio']);
  }

  ngOnDestroy() {
    this.subRadio.unsubscribe();
  }
}
