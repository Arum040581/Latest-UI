import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

import { WrkCollectionsService } from "../services/wrkcollections.service";
import { Workoutcollection } from "../models/workoutcollection";


import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Component({
    selector: 'app-viewall',
    templateUrl: '../viewall/viewall.html',
	
	providers: [WrkCollectionsService]
})
export class ViewAllComponent  {
	id: String;	
	 router:Router;
	workoutcollection: Workoutcollection[];
	wrkoutcollection: Workoutcollection;
    constructor(private wrkCollectionsService: WrkCollectionsService,router: Router){   
		this.router = router;	
    };
	navigateWrkout(url,workid,wrkActiveId){
		console.log(url);
		console.log(workid);
		console.log(wrkActiveId);
		this.router.navigateByUrl(url+';workid='+workid+';wrkActiveId='+wrkActiveId);
	}

	 
	deleteWrkColection(value){
		console.log(value);
		 this.wrkCollectionsService.deleteWorkoutCollection(value)
      .subscribe((res) => {
        	console.log(this.wrkoutcollection);
			alert("Successfully Deleted")
			this.wrkCollectionsService.getWorkoutcollections()
					.subscribe(workoutcollection => this.workoutcollection = workoutcollection);
	  });

		
	}
	ngOnInit() : void {
     this.wrkCollectionsService.getWorkoutcollections()
      .subscribe(workoutcollection => this.workoutcollection = workoutcollection);
	 
   }
};