import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ViewAllComponent } from './viewall/viewall.component'; //import viewall components
import { CreateComponent } from './create/create.component'; //import create components
import { EditComponent } from './edit/edit.component'; //import edit workout components
import { EndwrkoutComponent } from './endwrkout/endwrkout.component'; //import edit workout components
import { StartwrkoutComponent } from './startwrkout/startwrkout.component'; //import edit workout components
import { TrackComponent } from './track/track.component'; //import track workout components

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'viewall', component: ViewAllComponent },
  { path: 'track', component: TrackComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'endwrkout', component: EndwrkoutComponent },
  { path: 'startwrkout', component: StartwrkoutComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
