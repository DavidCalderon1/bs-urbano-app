import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuggestionNewPage } from './suggestion-new';

@NgModule({
  declarations: [
    SuggestionNewPage,
  ],
  imports: [
    IonicPageModule.forChild(SuggestionNewPage),
  ],
})
export class SuggestionNewPageModule {}
