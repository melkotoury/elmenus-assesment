import {combineReducers} from 'redux'

import UserReducer from './users'
import MenuReducer from './menu_category'

/**
* Take all our reducers and combine it in one javascript object to be passed to the store
**/

 const allReducers = combineReducers({
    users: UserReducer,
    menu: MenuReducer
});

export default allReducers;