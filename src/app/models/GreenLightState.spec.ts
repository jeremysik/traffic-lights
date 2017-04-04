import { AppComponent } from '../app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenLightState } from './GreenLightState';
import { YellowLightState } from './YellowLightState';
import { TrafficLightModel } from './TrafficLightModel';

describe('Green Light State', function () {

  it('should be able to set a TrafficLight\'s properties and next state', () => {
    
    let trafficLight:TrafficLightModel = new TrafficLightModel();

    expect(trafficLight.color).toEqual('red');
    expect(trafficLight.waitSeconds).toEqual(5 * 60);
    expect(trafficLight.nextState).toEqual(jasmine.any(GreenLightState));

    let greenLightState:GreenLightState = new GreenLightState();

    greenLightState.handle(trafficLight);

    expect(trafficLight.color).toEqual('green');
    expect(trafficLight.waitSeconds).toEqual(4.5 * 60);
    expect(trafficLight.nextState).toEqual(jasmine.any(YellowLightState));

  });

});