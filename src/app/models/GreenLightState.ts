import { ITrafficLightState, ValidLightState } from './ITrafficLightState';
import { TrafficLightModel } from './TrafficLightModel';
import { YellowLightState } from './YellowLightState';

export class GreenLightState implements ITrafficLightState {

	readonly waitSeconds:number = 4.5 * 60;
	readonly color:ValidLightState = 'green';

	public handle(trafficLight:TrafficLightModel):void {
		trafficLight.color = this.color;
		trafficLight.waitSeconds = this.waitSeconds;
		trafficLight.nextState = new YellowLightState();
	}
}