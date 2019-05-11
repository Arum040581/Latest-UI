import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

import { WorkoutCategory } from "../models/workoutcategory";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
 
@Injectable()
export class WorkoutCategoryService {
   constructor(private _http: Http) {
   }
  
  
   getWorkoutCategorys(): Observable<WorkoutCategory[]> {
	  
		 return this._http.get("http://localhost:9081/workouttracker/category/getcategorys")
      .map((response: Response) => <WorkoutCategory[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
		
   }
   addWorkoutCategorys(workoutCategory:WorkoutCategory): Observable<WorkoutCategory> {
		  let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:9081/workouttracker/category/create", workoutCategory, options).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
    deleteWorkoutCategory(workoutCategory:WorkoutCategory): Observable<WorkoutCategory> {
		  let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:9081/workouttracker/category/delete", workoutCategory, options).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
  extractData(res: Response) {
  let body = res.json();
  return body || {};
}
}