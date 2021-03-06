import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ENV } from '../../envoriments/envoriment'

@Injectable()

export class ApiRequestProvider {
  
  url: string = ENV.API;
	
	httpOptions = {
		headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
			'Authorization': this.getToken()
		})
	}

  constructor(public http: HttpClient) {
    console.log('Hello ApiRequestProvider Provider');
  }

  getToken(){
    let token = localStorage.getItem('token')
    console.log('token:'+token)
		return token ? token : " " 
	}

  get(endpoint: string, params?: any, reqOpts?: any) {
    return this.http.get(this.url + '/' + endpoint, this.httpOptions)
  }

  post(endpoint: string, body: any) {
    console.log(this.httpOptions)
    return this.http.post(this.url + '/' + endpoint, body, this.httpOptions )
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
