import React from 'react'
import './AnimatedCircle.scss';

const AnimatedCircle = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" className="Animated _Rect" {...props}>
		<g>
		<rect className="yellow" fill="#F0C931" x="3" y="3" width="3"  height="3" stroke="#F0C931" />
		<rect className="blue" fill="#002745" x="3.075" y="3.075" width="2.85" height="2.85" stroke="transparent" />
		
		</g>
	</svg>
)

export default AnimatedCircle;