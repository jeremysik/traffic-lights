import * as _ from "lodash";

import { Component } from '@angular/core';
import { IntersectionModel } from './models/IntersectionModel';
import { TrafficLightModel } from './models/TrafficLightModel';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {

	public displayIntersection:IntersectionModel;
	public outputIntersection:IntersectionModel;

	public outputDisplay:string[][] = [];
	public spedUpDisplayTime:string = '00:00:00';
	private spedUpDisplaySeconds:number = 0;

	constructor() {
		this.displayIntersection = new IntersectionModel();
		this.outputIntersection = new IntersectionModel();

		// Start the display model, use setInterval as a clock but speed up by 20x
		setInterval(() => {
			this.displayIntersection.tick();
			this.spedUpDisplayTime = this.secondsToTimeString(++this.spedUpDisplaySeconds);
		}, 50);

		// Quickly output all state changes from 0 to 30 minutes, use a for-loop as a clock
		this.outputDisplay.push(['00:00:00', this.outputIntersection.northSouthLight.color, this.outputIntersection.eastWestLight.color]);
		for(let i = 0; i < 1801; i++) {
			let lastArrayEntry:string[] = _.last(this.outputDisplay);

			if(lastArrayEntry[1] != this.outputIntersection.northSouthLight.color || lastArrayEntry[2] != this.outputIntersection.eastWestLight.color) {
				this.outputDisplay.push([this.secondsToTimeString(i), this.outputIntersection.northSouthLight.color, this.outputIntersection.eastWestLight.color]);
			}

			this.outputIntersection.tick();
		}
	}

	private secondsToTimeString(seconds:number):string {
		let date = new Date(null);
		date.setSeconds(seconds);
		return date.toISOString().substr(11, 8);
	}
}
