import { AppComponent } from '../app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntersectionModel } from './IntersectionModel';
import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';
import { YellowLightState } from './YellowLightState';
import { RedLightState } from './RedLightState';

describe('Intersection', function () {

  let redLightState:RedLightState = new RedLightState(),
      yellowLightState:YellowLightState = new YellowLightState(),
      greenLightState:GreenLightState = new GreenLightState();

  it('should set up a NS/EW traffic light intersection', () => {

    let intersection:IntersectionModel = new IntersectionModel();

    expect(intersection.northSouthLight.color).toEqual(redLightState.color);
    expect(intersection.northSouthLight.waitSeconds).toEqual(redLightState.waitSeconds);
    expect(intersection.northSouthLight.nextState).toEqual(jasmine.any(GreenLightState));

    expect(intersection.eastWestLight.color).toEqual(greenLightState.color);
    expect(intersection.eastWestLight.waitSeconds).toEqual(greenLightState.waitSeconds);
    expect(intersection.eastWestLight.nextState).toEqual(jasmine.any(YellowLightState));
  });

  it('should never have green and green/yellow clashing at the intersection', () => {

    let intersection:IntersectionModel = new IntersectionModel(),
        ticksInPeriod:number = redLightState.waitSeconds + yellowLightState.waitSeconds + greenLightState.waitSeconds;

    for(let i:number = 0; i < ticksInPeriod; i++) {
        if(intersection.northSouthLight.color == greenLightState.color) {
            expect(intersection.eastWestLight.color).toEqual(redLightState.color);
        }
        else if(intersection.eastWestLight.color == greenLightState.color) {
            expect(intersection.northSouthLight.color).toEqual(redLightState.color);
        }

        intersection.tick();
    }

  });

});