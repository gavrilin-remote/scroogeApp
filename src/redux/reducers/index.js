import {combineReducers} from 'redux';
import auth from './auth'
import budget from './budget'
import waste from './waste'
import settings from './settings'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth,
    budget,
    waste,
    settings,
    firebase: firebaseReducer
});

export default rootReducer