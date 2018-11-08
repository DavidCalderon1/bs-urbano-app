import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuggestionServiceProvider } from '../../providers/suggestion-service/suggestion-service';

@Component({
  selector: 'page-suggestion',
  templateUrl: 'suggestion.html'
})
export class SuggestionPage {

  suggestions: any[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public suggestionService: SuggestionServiceProvider
    ) {
    
  }

  ionViewDidLoad(){
    this.suggestionService.getSuggestions()
    .subscribe(
      (data) => { // Success
        this.suggestions = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }


}
