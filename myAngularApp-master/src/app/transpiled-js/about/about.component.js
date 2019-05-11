"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var workoutcategory_service_1 = require("../services/workoutcategory.service");
var workoutcategory_1 = require("../models/workoutcategory");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var AboutComponent = (function () {
    function AboutComponent(wrkCategoryService) {
        this.wrkCategoryService = wrkCategoryService;
        this.addCategoryModel = new workoutcategory_1.WorkoutCategory(0, "");
    }
    ;
    AboutComponent.prototype.refreshData = function () {
        var _this = this;
        this.wrkCategoryService.getWorkoutCategorys()
            .subscribe(function (workoutcategory) { return _this.workoutcategory = workoutcategory; });
    };
    AboutComponent.prototype.editCategory = function (value) {
        console.log(value);
        this.wrkoutcategory = new workoutcategory_1.WorkoutCategory(value, "");
        console.log(this.wrkoutcategory);
        //this.wrkCategoryService.deleteWorkoutCategory(this.wrkoutcategory).subscribe(data => console.log(JSON.stringify(data)));
        this.refreshData();
    };
    AboutComponent.prototype.deleteCategory = function (value) {
        console.log(value);
        this.wrkoutcategory = new workoutcategory_1.WorkoutCategory(value, "");
        console.log(this.wrkoutcategory);
        this.wrkCategoryService.deleteWorkoutCategory(this.wrkoutcategory).subscribe(function (data) { return console.log(JSON.stringify(data)); });
        this.refreshData();
    };
    AboutComponent.prototype.addcategory = function (form) {
        var _this = this;
        console.log(form.value);
        console.log("sdfs");
        this.wrkCategoryService.addWorkoutCategorys(form.value).subscribe(function (data) { return _this.refreshData(); });
        this.refreshData();
        form.reset();
        alert("Added Successfully");
        this.refreshData();
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wrkCategoryService.getWorkoutCategorys()
            .subscribe(function (workoutcategory) { return _this.workoutcategory = workoutcategory; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: './app/about/addcategory.html',
            providers: [workoutcategory_service_1.WorkoutCategoryService]
        }),
        __metadata("design:paramtypes", [workoutcategory_service_1.WorkoutCategoryService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
;
//# sourceMappingURL=about.component.js.map