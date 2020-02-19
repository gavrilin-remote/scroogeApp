import {combineReducers} from 'redux';
import auth from './auth'
import budget from './budget'
import waste from './waste'
import settings from './settings'
const rootReducer = combineReducers({
    auth,
    budget,
    waste,
    settings
});

export default rootReducer