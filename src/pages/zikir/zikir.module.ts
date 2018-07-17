import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZikirPage } from './zikir';

@NgModule({
  declarations: [
    ZikirPage,
  ],
  imports: [
    IonicPageModule.forChild(ZikirPage),
  ],
})
export class ZikirPageModule {}
