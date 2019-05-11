"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component"); //import home components
var about_component_1 = require("./about/about.component"); //import about component
var viewall_component_1 = require("./viewall/viewall.component"); //import viewall components
var create_component_1 = require("./create/create.component"); //import create components
var edit_component_1 = require("./edit/edit.component"); //import edit workout components
var endwrkout_component_1 = require("./endwrkout/endwrkout.component"); //import edit workout components
var startwrkout_component_1 = require("./startwrkout/startwrkout.component"); //import edit workout components
var track_component_1 = require("./track/track.component"); //import track workout components
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'viewall', component: viewall_component_1.ViewAllComponent },
    { path: 'track', component: track_component_1.TrackComponent },
    { path: 'create', component: create_component_1.CreateComponent },
    { path: 'edit', component: edit_component_1.EditComponent },
    { path: 'endwrkout', component: endwrkout_component_1.EndwrkoutComponent },
    { path: 'startwrkout', component: startwrkout_component_1.StartwrkoutComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map