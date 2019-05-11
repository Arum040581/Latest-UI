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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var wrkcollections_service_1 = require("../services/wrkcollections.service");
var wrkactive_service_1 = require("../services/wrkactive.service");
var workoutvo_1 = require("../models/workoutvo");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var EndwrkoutComponent = (function () {
    function EndwrkoutComponent(wrkActiveService, wrkCollectionsService, activatedRoute, router) {
        this.wrkActiveService = wrkActiveService;
        this.wrkCollectionsService = wrkCollectionsService;
        this.activatedRoute = activatedRoute;
        this.workoutModel = new workoutvo_1.WorkoutVo(0, "", "", new Date(), new Date());
        this.router = router;
    }
    ;
    EndwrkoutComponent.prototype.endWrkout = function (form) {
        var _this = this;
        console.log(form.value);
        var endWrkoutVo = {
            "endTime": form.value.workTime,
            "endDate": form.value.workDate,
            "comment": form.value.workoutNote,
            "workoutId": this.workoutModel.workoutId,
            "id": this.wrkActiveId
        };
        console.log(endWrkoutVo);
        this.wrkActiveService.endWorkout(endWrkoutVo).subscribe(function (data) {
            alert("Ended Successfully!!");
            _this.router.navigateByUrl("/viewall");
        });
    };
    EndwrkoutComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/viewall");
    };
    EndwrkoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init endwork");
        this.activatedRoute.params.subscribe(function (params) {
            var workid = params['workid'];
            _this.wrkActiveId = params['wrkActiveId'];
            console.log("workid:" + workid + " wrkActiveId: " + _this.wrkActiveId);
            if (workid != undefined) {
                _this.wrkCollectionsService.getWkCollectionById(workid)
                    .subscribe(function (workoutcollection) {
                    _this.workoutModel.workoutTitle = workoutcollection.workoutTitle;
                    _this.workoutModel.workoutNote = workoutcollection.workoutNote;
                    _this.workoutModel.workoutId = workid;
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
    EndwrkoutComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './app/endwrkout/endwrkout.html',
            providers: [wrkcollections_service_1.WrkCollectionsService, wrkactive_service_1.WrkActiveService]
        }),
        __metadata("design:paramtypes", [wrkactive_service_1.WrkActiveService, wrkcollections_service_1.WrkCollectionsService, router_1.ActivatedRoute, router_1.Router])
    ], EndwrkoutComponent);
    return EndwrkoutComponent;
}());
exports.EndwrkoutComponent = EndwrkoutComponent;
;
//# sourceMappingURL=endwrkout.component.js.map