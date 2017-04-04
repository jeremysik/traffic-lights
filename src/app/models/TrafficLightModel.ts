import { ITrafficLightState } from './ITrafficLightState';
import { RedLightState } from './RedLightState';

type ValidLightState = 'red'|'yellow'|'green';

export class TrafficLightModel {

	public color:ValidLightState;
	public waitSeconds:number = 0;
	public nextState:ITrafficLightState;

	constructor(initialState:ITrafficLightState = new RedLightState()) {
		this.nextState = initialState;
		this.nextState.handle(this);
	}

	// A clock should call this function on every tick
	public tick():void {
		this.waitSeconds--;
		if(this.waitSeconds == 0) {
			this.nextState.handle(this);
		}
	}

}