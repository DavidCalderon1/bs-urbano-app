
import { Injectable } from '@angular/core';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

import { ENV } from '../../envoriments/envoriment'

/*
  Generated class for the SuggestionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SuggestionServiceProvider {

  url: string = ENV.API;

  constructor(public api: ApiRequestProvider) {
    console.log('Hello SuggestionServiceProvider Provider');
  }

  getSuggestions() {
    return this.api.get('suggestions');
  }
}
