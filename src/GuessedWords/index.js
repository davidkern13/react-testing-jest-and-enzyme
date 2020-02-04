import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {

    let content;

    if(props.guessedWords.length === 0){
        content = (
            <span data-test={'guessed-instructions'}>
                Try to guess the secret word!
            </span>
        )
    }else {
        const guessedWordsRows = props.guessedWords.map((item, index) => (
            <tr data-test={'guessed-word'} key={index}>
                <td>{item.guessedWord}</td>
                <td>{item.letterMatchCount}</td>
            </tr>
        ));

        content = (
            <div data-test={'guessed-words'}>
               <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div data-test={'component-guessed-words'}>
            {content}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWords;