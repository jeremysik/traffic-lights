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
var _ = require("lodash");
var core_1 = require("@angular/core");
var IntersectionModel_1 = require("./models/IntersectionModel");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.outputDisplay = [];
        this.spedUpDisplayTime = '00:00:00';
        this.spedUpDisplaySeconds = 0;
        this.displayIntersection = new IntersectionModel_1.IntersectionModel();
        this.outputIntersection = new IntersectionModel_1.IntersectionModel();
        // Start the display model
        setInterval(function () {
            _this.displayIntersection.tick();
            _this.spedUpDisplayTime = _this.secondsToTimeString(++_this.spedUpDisplaySeconds);
        }, 50);
        // Quickly output all state changes from 0 to 30 minutes
        this.outputDisplay.push(['00:00:00', this.outputIntersection.northSouthLight.color, this.outputIntersection.eastWestLight.color]);
        for (var i = 0; i < 1801; i++) {
            var lastArrayEntry = _.last(this.outputDisplay);
            if (lastArrayEntry[1] != this.outputIntersection.northSouthLight.color || lastArrayEntry[2] != this.outputIntersection.eastWestLight.color) {
                this.outputDisplay.push([this.secondsToTimeString(i), this.outputIntersection.northSouthLight.color, this.outputIntersection.eastWestLight.color]);
            }
            this.outputIntersection.tick();
        }
    }
    AppComponent.prototype.secondsToTimeString = function (seconds) {
        var date = new Date(null);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './app.component.html',
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map