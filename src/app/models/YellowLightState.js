"use strict";
var RedLightState_1 = require("./RedLightState");
var YellowLightState = (function () {
    function YellowLightState() {
    }
    YellowLightState.prototype.handle = function (trafficLight) {
        trafficLight.color = 'yellow';
        trafficLight.waitSeconds = 30;
        trafficLight.nextState = new RedLightState_1.RedLightState();
    };
    return YellowLightState;
}());
exports.YellowLightState = YellowLightState;
//# sourceMappingURL=YellowLightState.js.map