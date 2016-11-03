import React, { Component } from 'react'

export default class CanvasLines extends Component {

	componentDidMount() {
		var canvasLines = this.refs.canvas;
		canvasLines.width = window.innerWidth;
		canvasLines.height = window.innerHeight;

		var context = canvasLines.getContext('2d');

		console.log(context)
	}

	render() {


		// context.beginPath();
		// context.moveTo(200, canvas.height / 2);
		// context.lineTo(canvas.width - 200, canvas.height / 2);
		// context.lineWidth = 20;
		// context.strokeStyle = '#0000ff';
		// context.lineCap = 'round';
		// context.stroke();
		return (
			<canvas ref="canvas" id="CanvasLines"></canvas>			
		);
	}
}