import React from 'react'
import './AnimatedCircle.scss';

const AnimatedCircle = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" className="Animated _Circle" {...props}>
		<circle className="yellow" fill="#F0C931" cx="3" cy="3" r="3"  stroke="#F0C931" />
		<circle className="blue" fill="#172B46" cx="3" cy="3" r="2.8" />
		<circle className="AnimateDash" fill="transparent" cx="3" cy="3" r="3"  stroke="#f00" />
	</svg>
)

export default AnimatedCircle;