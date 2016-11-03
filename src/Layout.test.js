import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { shallow } from 'enzyme'

describe('Layout Component', () => {

	it('renders without crashing', () => {
	  const element = shallow(<Layout />);
	});


	it('Typed: do the harlem shake', () => {
		const element = shallow(<Layout />);
		let phrase = 'do the harlem shake';
		phrase.split('').forEach(letter => {
			element.simulate('keydown', {
				key: letter
			})
		})
	
		expect(element.find('.Layout').hasClass('DoTheHarlemShake')).toEqual(true)
	})



	it('Typed: Kojima Code', () => {
		const element = shallow(<Layout />);
		let phrase = ['ArrowUp',
	        'ArrowUp',
	        'ArrowDown',
	        'ArrowDown',
	        'ArrowLeft',
	        'ArrowRight',
	        'ArrowLeft',
	        'ArrowRight',
	        'B',
	        'A'
        ];
		phrase.forEach(letter => {
			element.simulate('keydown', {
				key: letter
			})
		})
	
		expect(element.find('.Layout').hasClass('KojimaCode')).toEqual(true)
	})



	it('Mistyped: do the harlem shake', () => {
		const element = shallow(<Layout />);
		let phrase = 'do the halem shake';
		phrase.split('').forEach(letter => {
			element.simulate('keydown', {
				key: letter
			})
		})
	
		expect(element.find('.Layout').hasClass('DoTheHarlemShake')).toEqual(false)
	})
})
 