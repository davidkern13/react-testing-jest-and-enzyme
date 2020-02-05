import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <button />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(InputComponent);
