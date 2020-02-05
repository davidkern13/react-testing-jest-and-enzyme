import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        const contents = this.props.success
            ?
                null
            :
                (
                    <form className={'form-inline'}>
                        <input
                            data-test={'input-box'}
                            className={'input'}
                            type={'text'}
                            placeholder={'enter guess'}
                        />
                        <button
                            data-test={'submit-button'}
                            className={'btn'}
                            type={'submit'}
                            >
                            Submit
                        </button>
                    </form>
                )
        ;


        return (
            <div data-test={'component-input'}>
                {contents}
            </div>
        );
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
}

export default connect(mapStateToProps)(InputComponent);
