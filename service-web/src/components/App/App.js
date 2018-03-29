import React, { Component } from 'react';
import styles from './style.scss';
import Signup from '../../containers/signup/signup';
import DetailContainer from '../../containers/userDetail/userDetail';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={styles.App}>
        <Signup />
        <DetailContainer />
      </div>
    );
  }
}

export default App;
