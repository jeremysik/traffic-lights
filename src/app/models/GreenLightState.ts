import { ITrafficLightState } from './ITrafficLightState';
import { TrafficLightModel } from './TrafficLightModel';
import { YellowLightState } from './YellowLightState';

export class GreenLightState implements ITrafficLightState {

	public handle(trafficLight:TrafficLightModel):void {
		trafficLight.color = 'green';
		trafficLight.waitSeconds = 4.5 * 60;
		trafficLight.nextState = new YellowLightState();
	}
}