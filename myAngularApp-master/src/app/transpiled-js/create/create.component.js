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
var create_service_1 = require("../services/create.service");
var workoutcategory_1 = require("../models/workoutcategory");
var workoutcollection_1 = require("../models/workoutcollection");
var workoutcollectionvo_1 = require("../models/workoutcollectionvo");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var CreateComponent = (function () {
    function CreateComponent(createService) {
        this.createService = createService;
        this.selectedValue = null;
        this.categoryModel = new workoutcategory_1.WorkoutCategory(0, "");
        this.createWrkModel = new workoutcollection_1.Workoutcollection(0, "", "", 0, this.categoryModel);
    }
    ;
    CreateComponent.prototype.plus = function () {
        console.log(this.createWrkModel.caloriesBurnPerMin);
        this.createWrkModel.caloriesBurnPerMin = this.createWrkModel.caloriesBurnPerMin + 1;
        console.log(this.createWrkModel.caloriesBurnPerMin);
    };
    CreateComponent.prototype.minus = function () {
        console.log(this.createWrkModel.caloriesBurnPerMin);
        if (this.createWrkModel.caloriesBurnPerMin != 0)
            this.createWrkModel.caloriesBurnPerMin = this.createWrkModel.caloriesBurnPerMin - 1;
        console.log(this.createWrkModel.caloriesBurnPerMin);
    };
    CreateComponent.prototype.createWrkCol = function (form) {
        console.log(this.createWrkModel.caloriesBurnPerMin);
        this.workoutCollectionVO = new workoutcollectionvo_1.WorkoutCollectionVO(form.value.workoutTitle, form.value.workoutNote, this.createWrkModel.caloriesBurnPerMin, form.value.categoryId);
        console.log(this.workoutCollectionVO);
        this.createService.addWorkoutCollection(this.workoutCollectionVO).subscribe(function (data) { return console.log(JSON.stringify(data)); });
        form.reset();
        alert("Added Successfully");
    };
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createService.getWorkoutCategorys()
            .subscribe(function (workoutcategory) { return _this.listCategory = workoutcategory; });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './app/create/create.html',
            providers: [create_service_1.CreateService]
        }),
        __metadata("design:paramtypes", [create_service_1.CreateService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
;
//# sourceMappingURL=create.component.js.map