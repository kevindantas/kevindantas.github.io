import React, { Component } from 'react'
import logoKevin from '../../images/LogoKevin.svg'
import AnimatedCircle from '../../images/animations/AnimatedCircle'
import './Banner.scss'
import CanvasLines from './CanvasLines'


export default class Banner extends Component {


	render() {
		return (
			<section id="Banner">
				<div className="Banner-logo-wrapper">
					<img src={logoKevin} alt="Kevin Dantas" />
				</div>
				
				<AnimatedCircle style={{position: 'absolute', left: 250, top: 250}} />
				<CanvasLines />
			</section>
		);
	}
}