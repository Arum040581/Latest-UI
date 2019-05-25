import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

import { Workoutcollection } from "../models/workoutcollection";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
 
@Injectable()
export class WrkCollectionsService {
   constructor(private _http: Http) {
   }
  workoutcollection;
   getWorkoutcollections(): Observable<Workoutcollection[]> {
	  
		 return this._http.get("http://localhost:9081/workouttracker/workoutcollection/get")
      .map((response: Response) => <Workoutcollection[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
		
   }
   deleteWorkoutCollection(id:String){
	  return this._http.delete("http://localhost:9081/workouttracker/workoutcollection/"+id).map((response: Response) => console.log("@#@@#@#"+response.json())).do(data => console.log(JSON.stringify(data)));
		
		
   }
   getWkCollectionById(id:String): Observable<Workoutcollection>{
	
    return this._http.get("http://localhost:9081/workouttracker/workoutcollection/"+id).map((response: Response) => <Workoutcollection> response.json()).do(data => console.log(JSON.stringify(data)));
		
		
   }
   
  
    updateWrkCollection(wrkColVo:Object){
		  let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return this._http.put("http://localhost:9081/workouttracker/workoutcollection/update", wrkColVo, options).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
   
    extractData(res: Response) {
  let body = res.json();
  console.log("response @@@@@@@@@@@@@");
  console.log(res.text());
   console.log(res.status.toString());
  return body || {};
}
}