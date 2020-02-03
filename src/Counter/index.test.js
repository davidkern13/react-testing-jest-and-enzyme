import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Index from './index';

Enzyme.configure({adapter: new EnzymeAdapter() });

import { findByTestAttr } from '../jestUtils';

/*
* Factory function to create shalowWrapper for the component
* @function setup
* @param {object} props - Component props
* @param {object} state - Initial state for setup
* @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<Index {...props} />);
    if(state) wrapper.setState(state);

    return wrapper;
}

test ('render without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test ('renders increment button', () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    expect(incrementButton.length).toBe(1);
});

test ('renders decrement button', () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    expect(decrementButton.length).toBe(1);
});

test ('render counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
});

test ('counter start at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});

test ('render error message when state is true', () => {
    const error = true;
    const wrapper = setup(null, {error});

    //find error message
    const errorDisplay = findByTestAttr(wrapper, 'error-display');
    expect(errorDisplay.text().length).not.toBe(0);
});

test ('click button increment counter display', () => {
    const counter = 0;
    const wrapper = setup(null, { counter });

    //find button click
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    //find display & test val
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
});