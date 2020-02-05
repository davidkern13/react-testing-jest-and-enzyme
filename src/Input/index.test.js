import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, storeFactory } from '../jestUtils';
import InputComponent from './index';

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<InputComponent store={store}/>).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        })
        test('renders input box', () => {

        })
        test('renders submit button', () => {

        })
    });
    describe('word has been guessed', () => {
        test('renders component without error', () => {

        })
        test('does not renders input box', () => {

        })
        test('does not renders submit button', () => {

        })
    });
});
describe('update state', () => {

});