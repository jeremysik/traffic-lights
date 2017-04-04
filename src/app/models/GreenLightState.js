"use strict";
var YellowLightState_1 = require("./YellowLightState");
var GreenLightState = (function () {
    function GreenLightState() {
    }
    GreenLightState.prototype.handle = function (trafficLight) {
        trafficLight.color = 'green';
        trafficLight.waitSeconds = 4.5 * 60;
        trafficLight.nextState = new YellowLightState_1.YellowLightState();
    };
    return GreenLightState;
}());
exports.GreenLightState = GreenLightState;
//# sourceMappingURL=GreenLightState.js.map