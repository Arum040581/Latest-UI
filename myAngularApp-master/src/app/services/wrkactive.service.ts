import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

import { TrackerVo } from "../models/trackervo";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
 
@Injectable()
export class WrkActiveService {
   constructor(private _http: Http) {
   }
  
   startWorkout(wrkActvie:Object) {
		console.log(wrkActvie);
		 return this._http.post("http://localhost:9081/workouttracker/workoutactive/create", wrkActvie).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
      endWorkout(wrkActvie:Object) {
		console.log(wrkActvie);
		 return this._http.post("http://localhost:9081/workouttracker/workoutactive/update", wrkActvie).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
   
    getTracker(): Observable<TrackerVo>{
	
    return this._http.get("http://localhost:9081/workouttracker/workoutactive/track").map((response: Response) => <TrackerVo> response.json()).do(data => console.log(JSON.stringify(data)));		
		
   }
  
    extractData(res: Response) {
  let body = res.json();
  console.log("response @@@@@@@@@@@@@");
  console.log(res.text());
  return body;
}
}