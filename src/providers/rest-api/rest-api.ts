import { Injectable, ErrorHandler } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ENV } from '../../envoriments/envoriment';
/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const apiUrl = ENV.API+'/';
const apiUrlSubject = apiUrl+'/subjects';

@Injectable()
export class RestApiProvider {

	httpOptions = {
	  headers: new HttpHeaders({
	  	'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
		'Authorization': this.getToken()
	  })
	};
	
	constructor(public http: HttpClient) {
		console.log('Hello RestApiProvider Provider');
	}

	getToken(){
    	let token = localStorage.getItem('token')
    	console.log('token:'+token)
		return token ? token : " " 
	}

  	private handleError(error: HttpErrorResponse) {
	  if (error.error instanceof ErrorEvent) {
	    // A client-side or network error occurred. Handle it accordingly.
	    console.error('An error occurred:', error.error.message);
	  } else {
	    // The backend returned an unsuccessful response code.
	    // The response body may contain clues as to what went wrong,
	  	console.error(
	      `Backend returned code ${error.status}, ` +
	      `body was: ${error.error}`);
	  }
	  // return an observable with a user-facing error message
	  return JSON.stringify({error: 'Something bad happened; please try again later.'});
	}

	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}

	// metodos para subjects (casos)
	public getSubjects(): Observable<any> {
	  return this.http.get(apiUrlSubject, this.httpOptions).pipe(
	    map(this.extractData),
	    catchError(this.handleError));
	}

	public getSubjectsById(id: string): Observable<any> {
	  const url = `${apiUrlSubject}/${id}`;
	  return this.http.get(url, this.httpOptions).pipe(
	    map(this.extractData),
	    catchError(this.handleError));
	}

	public postSubjects(data): Observable<any> {
	  const url = `${apiUrlSubject}/add_with_students`;
	  return this.http.post(url, data, this.httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	public updateSubjects(id: string, data): Observable<any> {
	  const url = `${apiUrlSubject}/${id}`;
	  return this.http.put(url, data, this.httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

	public deleteSubjects(id: string): Observable<{}> {
	  const url = `${apiUrlSubject}/${id}`;
	  return this.http.delete(url, httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
	}

}
