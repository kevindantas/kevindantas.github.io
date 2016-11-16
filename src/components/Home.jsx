import React, { Component } from 'react'
import Banner from './landing/Banner'
import ProjectList from './landing/ProjectList'
import ContactForm from './ContactForm'
import TextField from './inputs/TextField'

export default class Home extends Component {

	render() {
		return (
			<div>
				<Banner />

				<ProjectList>
					<hr />
				</ProjectList>


				<section id="Contact">
					<ContactForm name="concact" title="Get in touch">
						<TextField type="email" name="email"  label="Email" hint="email@example.com" />

					</ContactForm>
				</section>
			</div>
		);
	}
}