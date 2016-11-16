import React, { Component, PropTypes } from 'react'

export default class ContactForm extends Component {


	static propTypes = {
		name: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		titleElem: PropTypes.element,
		style: PropTypes.object,
		titleStyle: PropTypes.object
	};


	renderTitle() {
		if(this.props.titleElem)
			return this.props.titleElem;

		return (
			<h2> { this.props.title }</h2>
		);
	}

	render() {
		return (
			<form name={this.props.name}>
				{ this.renderTitle() }

				{ this.props.children }
			</form>
		)
	}
}