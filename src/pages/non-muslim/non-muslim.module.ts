import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonMuslimPage } from './non-muslim';

@NgModule({
  declarations: [
    NonMuslimPage,
  ],
  imports: [
    IonicPageModule.forChild(NonMuslimPage),
  ],
})
export class NonMuslimPageModule {}
