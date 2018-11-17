import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectShowPage } from './subject-show';

@NgModule({
  declarations: [
    SubjectShowPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectShowPage),
  ],
})
export class SubjectShowPageModule {}
