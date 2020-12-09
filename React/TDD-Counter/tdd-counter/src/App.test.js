import React from 'react';
import { shallow } from 'enzyme';

import App from './App'


describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.find('h2').text()
    //assert
    expect(text).toEqual('Count: 0')

  })
  it('increments the counter when the +1 button is clicked', () => {
    const wrapper = shallow(<App />)
    const minusOneButton = wrapper.find('button.minus-one')
    const plusOneButton = wrapper.find('button.plus-one')
    
    //exercise
    plusOneButton.simulate('click')
    plusOneButton.simulate('click')
    minusOneButton.simulate('click')

    const text = wrapper.find('h2').text()

    //assert
    expect(text).toEqual('Count: 1')
    
  })
})