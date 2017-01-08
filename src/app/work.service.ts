import { Injectable } from '@angular/core';
import  { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class WorkService {

  	constructor(private _http:Http) { }
  	getWorkItems(){
  		return this._http.get('http://emmancipatemusemwa.com/eman-app-php-web-service/public/index.php/api/projects')
  			.map(res => res.json())
  	}
    getWorkItemById(id){
      return this._http.get('http://emmancipatemusemwa.com/eman-app-php-web-service/public/index.php/api/projects/' +  id)
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
