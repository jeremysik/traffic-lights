import { TrafficLightModel } from './TrafficLightModel';
import { GreenLightState } from './GreenLightState';

export class IntersectionModel {

	public northSouthLight:TrafficLightModel;
	public eastWestLight:TrafficLightModel;

	constructor() {
		this.northSouthLight = new TrafficLightModel();
		this.eastWestLight = new TrafficLightModel(new GreenLightState());
	}

	/*
	 * A clock should call this function on every tick.
	 * We could let each light control the timing of it's own state changes and then this 
	 * intersection controller would be responsible for checking states, but let's keep it simple.
	 * This method will also make it easier to have a sped up visual representation as well as
	 * the states printed out over a 30 minute period.
	 */
	public tick():void {
		this.northSouthLight.tick();
		this.eastWestLight.tick();
	}

}