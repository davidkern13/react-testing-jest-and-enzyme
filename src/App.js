import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }

    render(){

        let { counter } = this.state;

        return (
            <div className="ComponentApp" data-test={'component-app'}>
                <h1 data-test={'counter-display'}>Counter: {counter}</h1>
                <button
                    data-test={'increment-button'}
                    onClick={() => this.setState({ counter: counter + 1 })}
                >
                    Increment counter
                </button>
            </div>
        );
    }

}

export default App;
