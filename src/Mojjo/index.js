import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from "../GuessedWords";
import Congrats from "../Congrats";
import InputComponent from '../Input';

class Mojjo extends Component {
    render () {
        return (
            <div>
                <h1>Mojjo App</h1>
                <Congrats success={true}/>
                <InputComponent />
                <GuessedWords guessedWords={[
                    { guessedWord: 'train', letterMatchCount: 3},
                ]}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Mojjo);