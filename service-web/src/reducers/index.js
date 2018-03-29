import {combineReducers} from 'redux';
import myDetails from './myDetails';
import usersList from './user-list';

const allReducers = combineReducers({
    details: myDetails,
    users: usersList
})

export default allReducers;