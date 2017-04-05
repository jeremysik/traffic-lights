import { AppComponent } from '../app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenLightState } from './GreenLightState';
import { YellowLightState } from './YellowLightState';
import { RedLightState } from './RedLightState';
import { TrafficLightModel } from './TrafficLightModel';

describe('Yellow Light State', function () {

  it('should be able to set a TrafficLight\'s properties and next state', () => {
    
    let trafficLight:TrafficLightModel = new TrafficLightModel();

    expect(trafficLight.color).toEqual('red');
    expect(trafficLight.waitSeconds).toEqual(5 * 60);
    expect(trafficLight.nextState).toEqual(jasmine.any(GreenLightState));


    let greenLightState:YellowLightState = new YellowLightState();

    greenLightState.handle(trafficLight);

    expect(trafficLight.color).toEqual('yellow');
    expect(trafficLight.waitSeconds).toEqual(30);
    expect(trafficLight.nextState).toEqual(jasmine.any(RedLightState));

  });

});