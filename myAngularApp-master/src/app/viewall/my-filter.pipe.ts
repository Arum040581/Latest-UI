import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Workoutcollection } from "../models/workoutcollection";
@Pipe({
 name: 'filter',
 pure: false
})

@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filtertext: any): any {        		 
		if(filtertext.value != undefined  && items != undefined){	
			console.log("aasdd");
			console.log(items[0].workoutTitle);
			if(items[0].workoutTitle != undefined)
				return items.filter(item => item.workoutTitle.toLowerCase().indexOf(filtertext.value.toLowerCase()) !== -1);            
			else
				return items.filter(item => item.categoryName.toLowerCase().indexOf(filtertext.value.toLowerCase()) !== -1);            
			
		}
		 return items;
       
    }
}
