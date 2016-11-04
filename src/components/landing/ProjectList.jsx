import React, { Component } from 'react'
import Button from '../buttons/Button'
import './ProjectList.scss'
import ProjectItem from './ProjectItem';
import FAB from '../buttons/FAB';
import diadedoar from '../../images/projects/diadedoar.jpg'


export default class ProjectList extends Component {


	state = {
		translateX: 0,
		scale: 1
	};


	handleForwards() {
		// let diff = this.state.translateX < 10 ? 0 : 65;
		let diff = window.innerWidth * 0.65;
		this.setState({
			translateX: this.state.translateX - diff,
			scale: this.state.scale + (diff / 9400)
		})
	}


	handleBackwards() {
		let diff = this.state.translateX > 50 ? 0 : window.innerWidth * 0.65;
		this.setState({
			translateX: this.state.translateX + diff,
			scale: this.state.scale - (diff / 9400)
		})
	}



	render() {
		const FABStyle = {
			position: 'absolute',
			top: '50%'
		};


		var leftStyle = Object.assign({}, FABStyle, { left: 0 });
		var rightStyle = Object.assign({}, FABStyle, { right: 0 });


		var carouselStyle = {
			transform: `translateX(${this.state.translateX}px) scale(${this.state.scale}) rotateY(17deg)`
		};


		return (
			<section id="ProjectList">
				<h1>Projects</h1>

				<div className="projects-carousel">
					<FAB label="<" style={leftStyle} onClick={this.handleBackwards.bind(this)} />
					<div className="carousel-inner" style={carouselStyle}>
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
					</div>

					<FAB label=">" style={rightStyle} onClick={this.handleForwards.bind(this)} />
				</div>

				<Button href="/projects" label="Check all projects"  onClick={e => {e.preventDefault(); console.log(123)}}/>
			</section>
		);
	}
}