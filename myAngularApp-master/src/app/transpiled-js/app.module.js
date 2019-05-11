"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component"); //import home components
var about_component_1 = require("./about/about.component"); //import about component
var viewall_component_1 = require("./viewall/viewall.component"); //import home components
var create_component_1 = require("./create/create.component"); //import create workout components
var edit_component_1 = require("./edit/edit.component"); //import edit workout components
var endwrkout_component_1 = require("./endwrkout/endwrkout.component"); //import End workout components
var startwrkout_component_1 = require("./startwrkout/startwrkout.component"); //import End workout components
var track_component_1 = require("./track/track.component"); //import track workout components
var app_routing_1 = require("./app.routing");
var wrkcollections_service_1 = require("./services/wrkcollections.service");
var workoutcategory_service_1 = require("./services/workoutcategory.service");
var create_service_1 = require("./services/create.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, about_component_1.AboutComponent, home_component_1.HomeComponent, viewall_component_1.ViewAllComponent, create_component_1.CreateComponent, edit_component_1.EditComponent, endwrkout_component_1.EndwrkoutComponent, startwrkout_component_1.StartwrkoutComponent, track_component_1.TrackComponent],
            providers: [wrkcollections_service_1.WrkCollectionsService, workoutcategory_service_1.WorkoutCategoryService, create_service_1.CreateService],
            bootstrap: [app_component_1.AppComponent] // root component to bootstarp
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map