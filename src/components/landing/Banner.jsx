import React, { Component } from 'react'
import logoKevin from '../../images/LogoKevin.svg'
import './Banner.css'


export default class Banner extends Component {

	componentDidMount() {
		var lines = this.refs.canvasLines;
		lines.width = window.innerWidth;
		lines.height = window.innerHeight;
	}

	render() {
		return (
			<section className="Banner">
				<div className="Banner-logo-wrapper">
					<img src={logoKevin} alt="Kevin Dantas" />
				</div>

				<canvas ref="canvasLines" id="CanvasLines"></canvas>
			</section>
		);
	}
}