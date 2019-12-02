import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioCoverComponent } from './radio-cover';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [RadioCoverComponent],
  exports: [
    RadioCoverComponent
  ]
})
export class RadioCoverModule {}
