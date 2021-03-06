import React, {Component} from 'react';

class Index extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            error: false
        }
    }

    handleClick = (value) => {

        let { counter } = this.state;

        if(!counter && value === -1) {
            this.setState({ error: true});

            return;
        }

        this.setState((prevState) => ({
            counter: prevState.counter + value,
            error: false
        }));
    };

    render(){

        let { counter, error } = this.state;

        return (
            <div className="ComponentApp" data-test="component-app">
                <h1 data-test={'counter-display'}>Counter: {counter}</h1>

                { error &&
                <h3 data-test="error-display">Counter cannot be less 0</h3>
                }

                <button onClick={() => this.handleClick(+1)} data-test="increment-button">
                    Increment
                </button>

                <button onClick={() => this.handleClick(-1)} data-test="decrement-button">
                    Decrement
                </button>


            </div>
        );
    }
}

export default Index;
