import { AppComponent } from '../app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';
import { YellowLightState } from './YellowLightState';
import { RedLightState } from './RedLightState';

describe('Traffic Light', function () {

  let redLightState:RedLightState = new RedLightState(),
      yellowLightState:YellowLightState = new YellowLightState(),
      greenLightState:GreenLightState = new GreenLightState();

  it('should be able to set the initial state', () => {

    let trafficLight:TrafficLightModel = new TrafficLightModel(greenLightState);

    expect(trafficLight.color).toEqual(greenLightState.color);
    expect(trafficLight.waitSeconds).toEqual(greenLightState.waitSeconds);
    expect(trafficLight.nextState).toEqual(jasmine.any(YellowLightState));

  });

  it('should be able to cycle through the states with the right timings for each state', () => {

    let trafficLight:TrafficLightModel = new TrafficLightModel();

    expect(trafficLight.color).toEqual(redLightState.color);
    expect(trafficLight.waitSeconds).toEqual(redLightState.waitSeconds);
    expect(trafficLight.nextState).toEqual(jasmine.any(GreenLightState));

    // Tick to the next state
    for(let i:number = 0; i < redLightState.waitSeconds; i++) {
      trafficLight.tick();
    }

    expect(trafficLight.color).toEqual(greenLightState.color);
    expect(trafficLight.waitSeconds).toEqual(greenLightState.waitSeconds);
    expect(trafficLight.nextState).toEqual(jasmine.any(YellowLightState));

    // Tick to the next state
    for(let i:number = 0; i < greenLightState.waitSeconds; i++) {
      trafficLight.tick();
    }

    expect(trafficLight.color).toEqual(yellowLightState.color);
    expect(trafficLight.waitSeconds).toEqual(yellowLightState.waitSeconds);
    expect(trafficLight.nextState).toEqual(jasmine.any(RedLightState));

    // Tick to the next state
    for(let i:number = 0; i < yellowLightState.waitSeconds; i++) {
      trafficLight.tick();
    }

    // We should be back at red state now
    expect(trafficLight.color).toEqual(redLightState.color);
    expect(trafficLight.waitSeconds).toEqual(redLightState.waitSeconds);
    expect(trafficLight.nextState).toEqual(jasmine.any(GreenLightState));

  });

});