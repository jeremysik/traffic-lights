import { ITrafficLightState } from './ITrafficLightState';
import { TrafficLightModel } from './TrafficLightModel';
import { RedLightState } from './RedLightState';

export class YellowLightState implements ITrafficLightState {

	public handle(trafficLight:TrafficLightModel):void {
		trafficLight.color = 'yellow';
		trafficLight.waitSeconds = 30;
		trafficLight.nextState = new RedLightState();
	}
}