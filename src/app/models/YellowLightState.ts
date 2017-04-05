import { ITrafficLightState, ValidLightState } from './ITrafficLightState';
import { TrafficLightModel } from './TrafficLightModel';
import { RedLightState } from './RedLightState';

export class YellowLightState implements ITrafficLightState {

	readonly waitSeconds:number = 30;
	readonly color:ValidLightState = 'yellow';

	public handle(trafficLight:TrafficLightModel):void {
		trafficLight.color = this.color;
		trafficLight.waitSeconds = this.waitSeconds;
		trafficLight.nextState = new RedLightState();
	}
}