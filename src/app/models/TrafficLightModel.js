"use strict";
var RedLightState_1 = require("./RedLightState");
var TrafficLightModel = (function () {
    function TrafficLightModel(initialState) {
        if (initialState === void 0) { initialState = new RedLightState_1.RedLightState(); }
        this.waitSeconds = 0;
        this.nextState = initialState;
        this.nextState.handle(this);
    }
    TrafficLightModel.prototype.toggle = function () {
        this.waitSeconds--;
        if (this.waitSeconds == 0) {
            this.nextState.handle(this);
        }
    };
    return TrafficLightModel;
}());
exports.TrafficLightModel = TrafficLightModel;
//# sourceMappingURL=TrafficLightModel.js.map