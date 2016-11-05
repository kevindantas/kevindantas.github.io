import React from 'react'
import './AnimatedCircle.scss';

const AnimatedCircle = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" className="Animated _Circle" {...props}>
		<g>
		<circle className="yellow" fill="#F0C931" cx="3" cy="3" r="3"  stroke="#F0C931" />
		<circle className="blue" fill="#002745" cx="3" cy="3" r="2.85" stroke="transparent" />
		</g>
	</svg>
)

export default AnimatedCircle;