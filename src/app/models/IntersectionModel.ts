import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';

export class IntersectionModel {

	public northSouthLight:TrafficLightModel;
	public eastWestLight:TrafficLightModel;

	constructor() {
		this.northSouthLight = new TrafficLightModel();
		this.eastWestLight = new TrafficLightModel(new GreenLightState());
	}

	public tick():void {
		this.northSouthLight.toggle();
		this.eastWestLight.toggle();
	}

}