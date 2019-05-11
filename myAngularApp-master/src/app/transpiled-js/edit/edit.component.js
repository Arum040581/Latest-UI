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
var router_1 = require("@angular/router");
var create_service_1 = require("../services/create.service");
var wrkcollections_service_1 = require("../services/wrkcollections.service");
var workoutcategory_1 = require("../models/workoutcategory");
var workoutcollection_1 = require("../models/workoutcollection");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var EditComponent = (function () {
    function EditComponent(createService, wrkCollectionsService, activatedRoute, router) {
        this.createService = createService;
        this.wrkCollectionsService = wrkCollectionsService;
        this.activatedRoute = activatedRoute;
        this.selectedValue = null;
        this.categoryModel = new workoutcategory_1.WorkoutCategory(0, "");
        this.createWrkModel = new workoutcollection_1.Workoutcollection(0, "", "", 0, this.categoryModel);
        this.router = router;
    }
    ;
    EditComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/viewall");
    };
    EditComponent.prototype.updateWrkCol = function (form) {
        var _this = this;
        console.log(form.value);
        form.value["workoutId"] = this.createWrkModel.workoutId;
        console.log(form.value);
        this.wrkCollectionsService.updateWrkCollection(form.value).subscribe(function (data) {
            alert("Updated Successfully!!");
            _this.router.navigateByUrl("/viewall");
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createService.getWorkoutCategorys()
            .subscribe(function (workoutcategory) {
            _this.listCategory = workoutcategory;
        });
        this.activatedRoute.params.subscribe(function (params) {
            var workid = params['workid'];
            console.log("workid:");
            console.log(workid);
            if (workid != undefined) {
                _this.wrkCollectionsService.getWkCollectionById(workid)
                    .subscribe(function (workoutcollection) {
                    _this.createWrkModel.workoutTitle = workoutcollection.workoutTitle;
                    _this.createWrkModel.workoutNote = workoutcollection.workoutNote;
                    _this.createWrkModel.workoutId = workid;
                    _this.categoryModel.categoryId = workoutcollection.workoutCategory.categoryId;
                    _this.wrkColbById = workoutcollection;
                    console.log("this.wrkColbById:");
                    console.log(_this.wrkColbById);
                });
                console.log(_this.wrkColbById);
            }
            else {
                alert("please click through ViewAll page");
                _this.cancel();
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './app/edit/edit.html',
            providers: [create_service_1.CreateService, wrkcollections_service_1.WrkCollectionsService]
        }),
        __metadata("design:paramtypes", [create_service_1.CreateService, wrkcollections_service_1.WrkCollectionsService, router_1.ActivatedRoute, router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
;
//# sourceMappingURL=edit.component.js.map