import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioTabPage } from './radio-tab';
import { RadioCoverModule } from 'src/app/components/radio-cover/radio-cover.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RadioTabPage }]),

    RadioCoverModule
  ],
  declarations: [RadioTabPage]
})
export class RadioTabPageModule {}
