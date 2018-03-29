import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {information} from "../../actions/index"
import styles from './style.scss';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.formData}>
                    <input placeholder="Enter Your Name" />
                    <hr />
                    <input placeholder="Enter Your Age" />
                    <hr />
                    <input placeholder="Enter Your Gender" />
                    <hr />
                    <input placeholder="Enter Your Father Name" />
                    <hr />
                    <input placeholder="Enter Your Mobile Number" />
                    <hr />
                    <input placeholder="Enter Your House Address" />
                    <hr />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({information: information}, dispatch);
}

const SignupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);

export default SignupContainer;
