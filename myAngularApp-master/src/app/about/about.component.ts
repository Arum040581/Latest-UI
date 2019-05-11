import {Component} from '@angular/core';
import { WorkoutCategoryService } from "../services/workoutcategory.service";
import { WorkoutCategory } from "../models/workoutcategory";

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-about',
    templateUrl: '../about/addcategory.html',
	providers: [WorkoutCategoryService]
})
export class AboutComponent {
    welcome : string;
	addCategoryModel = new WorkoutCategory(0,"");
	wrkoutcategory;
	workoutcategory: WorkoutCategory[];
    constructor(private wrkCategoryService: WorkoutCategoryService){
      
    };
	refreshData():void{
		  this.wrkCategoryService.getWorkoutCategorys()
      .subscribe(workoutcategory => this.workoutcategory = workoutcategory);
	
	}
	editCategory(value){
		console.log(value);
		this.wrkoutcategory  = new WorkoutCategory(value,"");
	 
		console.log(this.wrkoutcategory);
		//this.wrkCategoryService.deleteWorkoutCategory(this.wrkoutcategory).subscribe(data => console.log(JSON.stringify(data)));
		this.refreshData();
	}

	deleteCategory(value){
		console.log(value);
		this.wrkoutcategory  = new WorkoutCategory(value,"");
	 
		console.log(this.wrkoutcategory);
		this.wrkCategoryService.deleteWorkoutCategory(this.wrkoutcategory).subscribe(data => console.log(JSON.stringify(data)));
		this.refreshData();
		
	}
	addcategory(form)
	{
		console.log(form.value);
		console.log("sdfs");
		this.wrkCategoryService.addWorkoutCategorys(form.value).subscribe(data => this.refreshData());
		this.refreshData();
		form.reset();
		alert("Added Successfully");
		this.refreshData();
		
	}
	
	
	
	ngOnInit() : void {
     this.wrkCategoryService.getWorkoutCategorys()
      .subscribe(workoutcategory => this.workoutcategory = workoutcategory);
	 
   }
};