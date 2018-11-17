import { Injectable } from '@angular/core';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

import "rxjs/add/operator/map";

@Injectable()
export class AuthProvider {
	idToken: string;

  constructor(
		public api: ApiRequestProvider) {
			console.log('Hello AuthProvider Provider');
  }

    login(credentials){
    return this.api.post('sessions', JSON.stringify({user: credentials}))
			.map(data => this.saveData(data))
	}

	saveData(data) {
		console.log(data.auth_token)
		localStorage.setItem('token', data.auth_token);
		localStorage.setItem('id_user', data.id_user);
	}

	logout() {
		localStorage.removeItem('token');	
	}

  public scheduleRefresh() {
	}
}
