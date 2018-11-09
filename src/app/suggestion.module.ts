import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SuggestionPage } from '../pages/suggestion/suggestion';



@NgModule({
  declarations: [
    SuggestionPage,
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(SuggestionPage),
  ],
  exports: [
    SuggestionPage
  ]
})
export class SuggestionPageModule {}
