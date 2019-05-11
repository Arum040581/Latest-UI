import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';


import { MyFilterPipe } from './viewall/my-filter.pipe';


import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ViewAllComponent } from './viewall/viewall.component'; //import home components
import { CreateComponent } from './create/create.component'; //import create workout components
import { EditComponent } from './edit/edit.component'; //import edit workout components
import { EndwrkoutComponent } from './endwrkout/endwrkout.component'; //import End workout components
import { StartwrkoutComponent } from './startwrkout/startwrkout.component'; //import End workout components
import { TrackComponent } from './track/track.component'; //import track workout components
import { routing }  from './app.routing';
import { WrkCollectionsService } from "./services/wrkcollections.service";
import { WorkoutCategoryService } from "./services/workoutcategory.service";
import { CreateService } from "./services/create.service";




@NgModule({
  imports:      [ BrowserModule, routing,FormsModule,HttpModule,ChartsModule], //other modules the app depends on
  declarations: [ AppComponent, AboutComponent, HomeComponent,ViewAllComponent,CreateComponent,EditComponent,EndwrkoutComponent,StartwrkoutComponent,TrackComponent,MyFilterPipe], // declare all derectives and components
  providers: [WrkCollectionsService,WorkoutCategoryService,CreateService],
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }