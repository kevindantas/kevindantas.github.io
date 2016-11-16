import React, { Component, PropTypes } from 'react'


export default class TextField extends Component {

	static propTypes = {
		label: PropTypes.string.isRequired,
		type: PropTypes.string,
		name: PropTypes.string
	}

	static defaultProps = {
		type: 'text'
	}




	renderLabel() {
		if(this.props.labelElem)
			return this.props.labelElem;

		return (<span>{ this.props.label }</span>)
	}

	render() {
		return (
			<label>

				{ this.renderLabel() }

				<input 
					type={this.props.type} 
					name={this.props.name} />
			</label>
		)
	}
}