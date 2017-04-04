"use strict";
var GreenLightState_1 = require("./GreenLightState");
var RedLightState = (function () {
    function RedLightState() {
    }
    RedLightState.prototype.handle = function (trafficLight) {
        trafficLight.color = 'red';
        trafficLight.waitSeconds = 5 * 60;
        trafficLight.nextState = new GreenLightState_1.GreenLightState();
    };
    return RedLightState;
}());
exports.RedLightState = RedLightState;
//# sourceMappingURL=RedLightState.js.map