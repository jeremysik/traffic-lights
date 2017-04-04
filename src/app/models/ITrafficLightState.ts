import { TrafficLightModel } from './TrafficLightModel';

export interface ITrafficLightState {
	
	handle(trafficLight:TrafficLightModel):void;
}