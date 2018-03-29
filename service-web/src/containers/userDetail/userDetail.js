import React , {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log('props ', this.props.userDetail);
        return (
            <div>
                {this.props.userDetail.first}
            </div>
        ) ;
    }


}

function mapStateToProps(state) {
    return {
        userDetail: state.details
    }
}


const DetailContainer = connect(
    mapStateToProps
)(UserDetail);

export default DetailContainer;
