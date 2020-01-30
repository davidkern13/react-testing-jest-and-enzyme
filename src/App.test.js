import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

/*
* Factory function to create shalowWrapper for the component
* @function setup
* @param {object} props - Component props
* @param {object} state - Initial state for setup
* @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if(state) wrapper.setState({state});

    return wrapper;
}

/*
* Return ShallowWrapper containing node(s) with given data test attr val.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
* @param {string} val - Value of data-test attr for search
* @return {ShallowWrapper}
*/
const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test='${attr}']`);
};

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

test ('click button increment counter display', () => {
    const counter = 0;
    const wrapper = setup(null, counter);

    //find button click
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    //find display & test val
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
});