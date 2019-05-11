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
var wrkcollections_service_1 = require("../services/wrkcollections.service");
require("rxjs/add/operator/map");
var ViewAllComponent = (function () {
    function ViewAllComponent(wrkCollectionsService, router) {
        this.wrkCollectionsService = wrkCollectionsService;
        this.router = router;
    }
    ;
    ViewAllComponent.prototype.navigateWrkout = function (url, workid, wrkActiveId) {
        console.log(url);
        console.log(workid);
        console.log(wrkActiveId);
        this.router.navigateByUrl(url + ';workid=' + workid + ';wrkActiveId=' + wrkActiveId);
    };
    ViewAllComponent.prototype.deleteWrkColection = function (value) {
        var _this = this;
        console.log(value);
        this.wrkCollectionsService.deleteWorkoutCollection(value)
            .subscribe(function (res) {
            console.log(_this.wrkoutcollection);
            alert("Successfully Deleted");
            _this.wrkCollectionsService.getWorkoutcollections()
                .subscribe(function (workoutcollection) { return _this.workoutcollection = workoutcollection; });
        });
    };
    ViewAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wrkCollectionsService.getWorkoutcollections()
            .subscribe(function (workoutcollection) { return _this.workoutcollection = workoutcollection; });
    };
    ViewAllComponent = __decorate([
        core_1.Component({
            selector: 'app-viewall',
            templateUrl: './app/viewall/viewall.html',
            providers: [wrkcollections_service_1.WrkCollectionsService]
        }),
        __metadata("design:paramtypes", [wrkcollections_service_1.WrkCollectionsService, router_1.Router])
    ], ViewAllComponent);
    return ViewAllComponent;
}());
exports.ViewAllComponent = ViewAllComponent;
;
//# sourceMappingURL=viewall.component.js.map