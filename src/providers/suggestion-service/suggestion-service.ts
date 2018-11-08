import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SuggestionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SuggestionServiceProvider {

  constructor(private http: HttpClient) {
    console.log('Hello SuggestionServiceProvider Provider');
  }

  getSuggestions() {
    return this.http.get('https://bs-urbano.herokuapp.com/api/v1/suggestions');
  }
}
