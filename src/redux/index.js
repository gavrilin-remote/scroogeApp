import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from 'redux-persist'
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/database'

const fbConfig = {}

const rrfConfig = {
    userProfile: 'users'
}

firebase.initializeApp(fbConfig)

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

function _getMiddlewares() {
    let middlewares = [
        thunk,
    ];

    if (process.env.NODE_ENV !== 'production') {
        middlewares = [
            ...middlewares,
            logger
        ];
    }
    return applyMiddleware(...middlewares);
}

function configureStore(initialState: { [key: string]: any }) {
    // noinspection TypeScriptValidateTypes
    const store = createStore(
        persistedReducer,
        initialState,
        _getMiddlewares()
    );
    const persistor = persistStore(store);

    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch
    }

    return {store, persistor, rrfProps}
}

export const {store, persistor, rrfProps} = configureStore({})

