import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { render } from '@testing-library/react';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

test ('render without error', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper.debug());
    const appComponent = wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1);
});