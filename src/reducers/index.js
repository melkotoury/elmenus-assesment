import {combineReducers} from 'redux'

import UserReducer from './users'

/**
* Take all our reducers and combine it in one javascript object to be passed to the store
**/

 const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;