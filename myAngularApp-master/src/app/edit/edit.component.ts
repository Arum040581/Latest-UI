import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CreateService } from "../services/create.service";
import { WrkCollectionsService } from "../services/wrkcollections.service";
import { WorkoutCategory } from "../models/workoutcategory";
import { Workoutcollection } from "../models/workoutcollection";
import { WorkoutCollectionVO } from "../models/workoutcollectionvo";

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-create',
    templateUrl: '../edit/edit.html',
	providers: [CreateService,WrkCollectionsService]
})
export class EditComponent {
	selectedValue = null;
	workoutCollectionVO;
	categoryModel = new WorkoutCategory(0,"");
	createWrkModel = new Workoutcollection(0,"","",0,this.categoryModel);
	wrkColbById: Workoutcollection;
	
	router:Router;
    listCategory: WorkoutCategory[];
    constructor(private createService: CreateService,private wrkCollectionsService: WrkCollectionsService,private activatedRoute: ActivatedRoute,router: Router){
        this.router = router;
    };
	cancel(){
		this.router.navigateByUrl("/viewall");
	}
	updateWrkCol(form){
		
		console.log(form.value);
		form.value["workoutId"] = this.createWrkModel.workoutId;
		console.log(form.value);
	
	this.wrkCollectionsService.updateWrkCollection(form.value).subscribe(data => {
				
				alert("Updated Successfully!!");
				this.router.navigateByUrl("/viewall");
				
				});
	}
	
	ngOnInit() : void {
		
     this.createService.getWorkoutCategorys()
      .subscribe(workoutcategory => {
		  this.listCategory = workoutcategory;
		  
		  
	  });
	  
	 this.activatedRoute.params.subscribe((params: Params) => {
        let workid = params['workid'];
		console.log("workid:");
        console.log(workid);
		if(workid != undefined){
			this.wrkCollectionsService.getWkCollectionById(workid)
		  .subscribe(workoutcollection =>{
			   this.createWrkModel.workoutTitle = workoutcollection.workoutTitle;
		  this.createWrkModel.workoutNote = workoutcollection.workoutNote;
		  this.createWrkModel.workoutId = workid;
		  this.categoryModel.categoryId = workoutcollection.workoutCategory.categoryId;
		  this.wrkColbById = workoutcollection;
			   console.log("this.wrkColbById:");
			console.log(this.wrkColbById);
			  
		  }); 
		 
		  console.log(this.wrkColbById);
		}else{
			alert("please click through ViewAll page");
			this.cancel();
		}
      }); 
	
   }
};