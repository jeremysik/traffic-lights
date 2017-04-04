import { ITrafficLightState } from './ITrafficLightState';
import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';

export class RedLightState implements ITrafficLightState {

	public handle(trafficLight:TrafficLightModel):void {
		trafficLight.color = 'red';
		trafficLight.waitSeconds = 5 * 60;
		trafficLight.nextState = new GreenLightState();
	}
}