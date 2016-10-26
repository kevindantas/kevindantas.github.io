import React from 'react'
import logoKevin from '../../images/LogoKevin.svg'
import Banner from './Banner'
import {shallow} from 'enzyme'


describe('Home Banner', () => {
	it('Render component', () => {
		const component = shallow(<Banner />)
	})
})