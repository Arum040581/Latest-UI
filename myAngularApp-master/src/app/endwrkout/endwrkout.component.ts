import {Router, ActivatedRoute, Params} from '@angular/router';
import {Component} from '@angular/core';
import { WrkCollectionsService } from "../services/wrkcollections.service";
import { WrkActiveService} from "../services/wrkactive.service";
import { WorkoutCategory } from "../models/workoutcategory";
import { Workoutcollection } from "../models/workoutcollection";
import { WorkoutCollectionVO } from "../models/workoutcollectionvo";
import { WorkoutVo } from "../models/workoutvo";

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-create',
    templateUrl: '../endwrkout/endwrkout.html',
	providers: [WrkCollectionsService,WrkActiveService]
})
export class EndwrkoutComponent {
	   
	wrkColbById: Workoutcollection;
	wrkActiveId;
	workoutModel = new WorkoutVo(0,"","",new Date() ,new Date());
	router:Router;
	
    constructor(private wrkActiveService:WrkActiveService,private wrkCollectionsService: WrkCollectionsService,private activatedRoute: ActivatedRoute,router: Router){
       this.router = router;
    };
	endWrkout(form){
		console.log(form.value);
			let endWrkoutVo = {	
								"endTime":form.value.workTime,
								"endDate":form.value.workDate,
								"comment":form.value.workoutNote,
								"workoutId":this.workoutModel.workoutId,
								"id":this.wrkActiveId
							};
			console.log(endWrkoutVo);
			this.wrkActiveService.endWorkout(endWrkoutVo).subscribe(data => {
				
				alert("Ended Successfully!!");
				this.router.navigateByUrl("/viewall");
				
				});
			
			}
	cancel(){
		this.router.navigateByUrl("/viewall");
	}
		
	ngOnInit() : void {
		console.log("init endwork");
		 this.activatedRoute.params.subscribe((params: Params) => {
        let workid = params['workid'];
		this.wrkActiveId = params['wrkActiveId'];
		console.log("workid:"+workid+" wrkActiveId: "+this.wrkActiveId);
       if(workid != undefined){
			this.wrkCollectionsService.getWkCollectionById(workid)
		  .subscribe(workoutcollection =>{
			   this.workoutModel.workoutTitle = workoutcollection.workoutTitle;
		  this.workoutModel.workoutNote = workoutcollection.workoutNote;
		  this.workoutModel.workoutId = workid;
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