import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import { WrkActiveService} from "../services/wrkactive.service";
import { TrackerVo } from "../models/trackervo";


import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-track',
    templateUrl: '../track/track.html',
	providers: [WrkActiveService]
})
export class TrackComponent {
	trackervo: TrackerVo;
	 router:Router;
	constructor(private wrkActiveService: WrkActiveService,router: Router){   
		this.router = router;	
    };
	public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
 public chartColors = [
   { backgroundColor:["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37","#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"] },
    { backgroundColor:"green" },
    { backgroundColor:"blue" },
    { backgroundColor:"yellow" }
  // ...colors for additional data sets
];
 
  public barChartType = 'bar';
  public barChartLegend = true;
  
  public yearChartData = [{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Year'}];
  public yearChartLabels = [1,2,3,4,5,6,7,8,9,10,11,12];
  public week_cal =0;
  
  public monthChartData = [{data: [0,0,0,0,0], label: 'Month'}];
  public monthChartLabels = ["Week 1","Week 2","Week 3","Week 4","Week 5"];
  public month_cal =0;
  
  public weekChartData = [{data: [0,0,0,0,0,0,0], label: 'Week'}];
  public weekChartLabels = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
  public year_cal =0;
  
  ngOnInit() : void {
     this.wrkActiveService.getTracker()
      .subscribe(trackervo =>{ 
	  this.trackervo = trackervo  
	 
	  this.yearChartData = [{data: this.trackervo.years, label: 'Years'}  ];
	  this.monthChartData = [{data: this.trackervo.month, label: 'month'}  ];
	  this.weekChartData = [{data: this.trackervo.week, label: 'week'}  ];
	  this.week_cal =this.trackervo.week_cal;
	  this.month_cal =this.trackervo.month_cal;
	  this.year_cal =this.trackervo.years_cal;
	  });
	 
   }
  
  
};