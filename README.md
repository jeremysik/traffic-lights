# Intersection Challenge

You are required to provide the code for an application that simulates a set of traffic lights at an intersection.
The traffic lights are designated (N, S) and (E, W) like a compass.

# Requirements

When switching from green to red, the yellow light must be displayed for 30 seconds prior to it switching to red. The lights will change automatically every 5 minutes.
You're not required to optimize the solution, just focus on a functional approach to requirements.
Provide the output for the light changes which occur during a given thirty minute period. You must provide unit tests for all logic.
Create a repo on bitbucket/github and provide the link as well as instructions on how to run.

# Instructions

Clone this repo.
```shell
git clone https://github.com/jeremysik/traffic-lights.git
cd traffic-lights
```

Install the npm packages described in the `package.json`:
```shell
npm install
```

Run unit tests (requires Chrome):
```shell
npm test
```

Run the simulation (this should open a new browser window):
```shell
npm start
```

Shut it down manually with `Ctrl-C`.