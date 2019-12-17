import {combineReducers} from 'redux';
import auth from './auth'
import budget from './budget'
import waste from './waste'

const rootReducer = combineReducers({
    auth,
    budget,
    waste
});

export default rootReducer