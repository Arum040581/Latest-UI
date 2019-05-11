import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

import { WorkoutCategory } from "../models/workoutcategory";
import { WorkoutCollectionVO } from "../models/workoutcollectionvo";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
 
@Injectable()
export class CreateService {
   constructor(private _http: Http) {
   }
  getWorkoutCategorys(): Observable<WorkoutCategory[]> {
	  
		 return this._http.get("http://localhost:9081/workouttracker/category/getcategorys")
      .map((response: Response) => <WorkoutCategory[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
		
   }
   addWorkoutCollection(workoutCollectionVO:WorkoutCollectionVO): Observable<WorkoutCollectionVO>{
		  let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:9081/workouttracker/workoutcollection/create", workoutCollectionVO, options).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
   extractData(res: Response) {
  let body = res.json();
  return body || {};
}
}