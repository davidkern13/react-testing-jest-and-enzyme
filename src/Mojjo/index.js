import React, { Component } from 'react';
import GuessedWords from "../GuessedWords";
import Congrats from "../Congrats";

class Mojjo extends Component {
    render () {
        return (
            <div>
                <h1>Mojjo App</h1>
                <Congrats success={true}/>
                <GuessedWords guessedWords={[
                    { guessedWord: 'train', letterMatchCount: 3},
                ]}/>
            </div>
        )
    }
}

export default Mojjo;