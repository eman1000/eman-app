import { Injectable } from '@angular/core';
import  { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class WorkService {

  	constructor(private _http:Http) { }
  	getCurrentTime(){
  		return this._http.get('http://date.jsontest.com')
  			.map(res => res.json())
  	}
  	postJSON(){
  		var json = JSON.stringify({va1:'test', va2:3});
  		var params = 'json=' + json;
  		var headers = new Headers();
  		headers.append('Content-Type',
  			'application/x-www-form-urlencoded');

  		return this._http.post('http://validate.jsontest.com',
  			params, {
  				headers: headers
  			})
  			.map(res => res.json());

  	}

}
