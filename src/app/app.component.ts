//import * as _ from "lodash";

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

	constructor() {
		this.displayIntersection = new IntersectionModel();
		this.outputIntersection = new IntersectionModel();

		// Start the display model
		setInterval(() => {
			this.displayIntersection.tick();
		}, 50);

		// Quickly output all state changes from 0 to 30 minutes
		this.outputDisplay.push(['00:00:00',this.outputIntersection.northSouthLight.color,this.outputIntersection.eastWestLight.color]);
		for(let i = 1; i < 1801; i++) {
			if(this.outputDisplay[this.outputDisplay.length - 1][1] != this.outputIntersection.northSouthLight.color || this.outputDisplay[this.outputDisplay.length - 1][2] != this.outputIntersection.eastWestLight.color) {
				let date = new Date(null);
				date.setSeconds(i);
				var timeString = date.toISOString().substr(11, 8);
				this.outputDisplay.push([timeString,this.outputIntersection.northSouthLight.color,this.outputIntersection.eastWestLight.color]);
			}

			this.outputIntersection.tick();
		}

	}
}
