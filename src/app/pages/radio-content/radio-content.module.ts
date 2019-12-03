import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioContentPage } from './radio-content';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: RadioContentPage }])
  ],
  declarations: [RadioContentPage]
})
export class RadioContentPageModule {}
