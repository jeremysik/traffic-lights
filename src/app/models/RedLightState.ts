import { ITrafficLightState, ValidLightState } from './ITrafficLightState';
import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';

export class RedLightState implements ITrafficLightState {

	readonly waitSeconds:number = 5 * 60;
	readonly color:ValidLightState = 'red';

	public handle(trafficLight:TrafficLightModel):void {
		trafficLight.color = this.color;
		trafficLight.waitSeconds = this.waitSeconds;
		trafficLight.nextState = new GreenLightState();
	}
}