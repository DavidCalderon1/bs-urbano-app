import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuggestionPage } from '../suggestion/suggestion';

/**
 * Generated class for the SuggestionNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggestion-new',
  templateUrl: 'suggestion-new.html',
})
export class SuggestionNewPage {

  private detail: string;
  private dateTime: string;
  error: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionNewPage');
  }



  submitNew(){

  	this.dateTime = (new Date().toISOString());
    
    this.newSuggestion({detail: this.detail, user_id: localStorage.getItem('user_id'), date: this.dateTime})
      .subscribe(
        data => { 
          this.error = '';
          this.redirectToList() },
        error => {
          this.error = error.error.error;
        }
      )
  }

  redirectToList() {
    this.navCtrl.push(SuggestionPage);
  }

}
