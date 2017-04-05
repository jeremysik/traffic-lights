import { TrafficLightModel } from './TrafficLightModel';

export type ValidLightState = 'red'|'yellow'|'green';

export interface ITrafficLightState {

	readonly waitSeconds:number;
	readonly color:ValidLightState;
	
	handle(trafficLight:TrafficLightModel):void;
}