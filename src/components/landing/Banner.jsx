import React, { Component } from 'react'
import logoKevin from '../../images/LogoKevin.svg'
import './Banner.scss'
import CanvasLines from './CanvasLines'


export default class Banner extends Component {


	render() {
		return (
			<section id="Banner">
				<div className="Banner-logo-wrapper">
					<img src={logoKevin} alt="Kevin Dantas" />
				</div>
				<CanvasLines />
			</section>
		);
	}
}