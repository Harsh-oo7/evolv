import updateState from './dishDetails';
import {combineReducers} from 'redux';
import updateRole from './addRole';

const rootReducer = combineReducers(
    {
        updateState,
        updateRole
    }
);

export default rootReducer;