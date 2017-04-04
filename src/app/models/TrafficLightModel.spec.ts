import { AppComponent } from '../app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';
import { YellowLightState } from './YellowLightState';

describe('Traffic Light', function () {

  it('should be able to set the initial state', () => {

    let trafficLight:TrafficLightModel = new TrafficLightModel(new GreenLightState());

    expect(trafficLight.color).toEqual('green');
    expect(trafficLight.waitSeconds).toEqual(4.5 * 60);
    expect(trafficLight.nextState).toEqual(jasmine.any(YellowLightState));

  });

  it('should be able to cycle through the states with the right timings for each state', () => {

  });

});