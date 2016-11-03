import React, { Component } from 'react'
import { Link } from 'react-router';
import logoKevin from '../images/LogoKevin.svg';
import './NavBar.css'


export default class NavBar extends Component {

	componentDidMount() {
		this.setState({
			scrollY: window.scrollY
		});

		window.addEventListener('scroll', this.handleScroll.bind(this))
	}

	handleScroll() {
		this.setState({
			scrollY: window.scrollY
		})
	}




	render() {
		var classes = '';
		if(window.scrollY > window.innerHeight / 2)
			classes += 'isVisible'

		return (
			<header className={`NavBar ${classes}`}>
	          <nav>
	            <Link href="/">
	              <img src={logoKevin} alt="Kevin Dantas logo" className="Layout-logo" />
	            </Link>

	            <ul className="Layout-menu">
	              <li>
	                <Link href="#work">Work</Link>
	              </li>
	              <li>
	                <Link href="#contact">Contact</Link>
	              </li>
	            </ul>
	          </nav>
	        </header>
		);
	}
}