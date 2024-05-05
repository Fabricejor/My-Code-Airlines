import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Graph1 extends Component {
	constructor() {
		super();
		this.addSymbols = this.addSymbols.bind(this);
	}
	
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
 
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	}
	
	render() {	
		const options = {
			animationEnabled: true,
			zoomEnabled: true,
			animationDuration: 10000,
			theme: "dark1", // "light1", "light2", "dark1", "dark2"
			title: {
				text: "Top most visited countries in the world - June 2024"
			},
			axisY: {
				title: "Number of Tourists per year",
				labelFormatter: this.addSymbols,
				scaleBreaks: {
				autoCalculate: false
			}
			},
			axisX: {
				title: "Countries in the world",
				labelAngle: 0
			},
			width: "900",
			height:"500",
			data: [{
				type: "column",
				dataPoints: [
					{ label: "France", y: 89206498},
					{ label: "Espagne", y: 81897709},
					{ label: "USA", y: 75670438},
					{ label: "China", y: 60453224},
					{ label: "Italy", y: 58389443},
					{ label: "Mexico", y: 39815084},
					{ label: "United Kingdom", y: 37000000}	
				]
			}]
		}
						
		return (
		<div  className="GraphContent">
			<CanvasJSChart  options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	} 			
}
 
export default Graph1; 