import React, { Component } from 'react'
import Button from '../Button'
import './ProjectList.scss'
import diadedoar from '../../images/projects/diadedoar.jpg'


export default class ProjectList extends Component {
	render() {
		return (
			<section id="ProjectList">
				<h1>Projects</h1>

				<div className="projects-carousel">
					<div className="project-item">
						<figure>
							<img src={diadedoar} alt="Project Name"/>
							<figcaption>
								Dia de Doar
							</figcaption>
						</figure>
					</div>
				</div>

				<Button href="/projects" label="Check all projects" />
			</section>
		);
	}
}