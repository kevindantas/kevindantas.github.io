import React, { Component } from 'react'
import Button from '../Button'
import './ProjectList.scss'
import ProjectItem from './ProjectItem';
import diadedoar from '../../images/projects/diadedoar.jpg'


export default class ProjectList extends Component {
	render() {
		return (
			<section id="ProjectList">
				<h1>Projects</h1>

				<div className="projects-carousel">
					<div className="carousel-inner">
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
						<ProjectItem image={diadedoar} name="Dia de Doar" />
					</div>
				</div>

				<Button href="/projects" label="Check all projects" />
			</section>
		);
	}
}