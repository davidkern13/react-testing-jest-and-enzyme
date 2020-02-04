import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../jestUtils';

import GuessedWords from './index';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}]
};

/*
* Factory function to create shalowWrapper for the component
* @function setup
* @param {object} props - Component props
* @returns {ShallowWrapper}
*/
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe( 'if there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: []});
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guessed-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe( 'if there are words guessed', () => {
    let wrapper;

    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3},
        { guessedWord: 'agile', letterMatchCount: 1},
        { guessedWord: 'party', letterMatchCount: 5},
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section ', () => {
        const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsDiv.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});