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
    templateUrl: '../startwrkout/startwrkout.html',
	providers: [WrkCollectionsService,WrkActiveService]
})
export class StartwrkoutComponent {
	   
	wrkColbById: Workoutcollection;
	workoutModel = new WorkoutVo(0,"","",new Date() ,new Date());	
	router:Router;
	
    constructor( private wrkActiveService:WrkActiveService,private wrkCollectionsService: WrkCollectionsService, private activatedRoute: ActivatedRoute,router: Router){
       this.router = router;
    };
	
	startWrkout(form){
			let startWrkoutVo = {	
								"startTime":form.value.workTime,
								"startDate":form.value.workDate,
								"workoutId":this.workoutModel.workoutId
							};
			console.log(startWrkoutVo);
			this.wrkActiveService.startWorkout(startWrkoutVo).subscribe(data => {
				
				alert("Started Successfully!!");
				this.router.navigateByUrl("/viewall");
				
				});
			
			}
	
	cancel(){
		this.router.navigateByUrl("/viewall");
	}
	
		
	ngOnInit() : void {
		 this.activatedRoute.params.subscribe((params: Params) => {
        let workid = params['workid'];
		console.log("workid:");
        console.log(workid);
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