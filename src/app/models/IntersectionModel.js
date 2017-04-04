"use strict";
var TrafficLightModel_1 = require("./TrafficLightModel");
var GreenLightState_1 = require("./GreenLightState");
var IntersectionModel = (function () {
    function IntersectionModel() {
        this.northSouthLight = new TrafficLightModel_1.TrafficLightModel();
        this.eastWestLight = new TrafficLightModel_1.TrafficLightModel(new GreenLightState_1.GreenLightState());
    }
    IntersectionModel.prototype.tick = function () {
        this.northSouthLight.toggle();
        this.eastWestLight.toggle();
    };
    return IntersectionModel;
}());
exports.IntersectionModel = IntersectionModel;
//# sourceMappingURL=IntersectionModel.js.map