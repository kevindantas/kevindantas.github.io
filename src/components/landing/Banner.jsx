import React, { Component } from 'react'
import logoKevin from '../../images/LogoKevin.svg'
import './Banner.css'


export default class Banner extends Component {
	render() {
		return (
			<section className="Banner">
				<div className="Banner-logo-wrapper">
					<img src={logoKevin} alt="Kevin Dantas" />
				</div>
			</section>
		);
	}
}