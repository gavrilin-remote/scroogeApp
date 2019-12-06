import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from 'redux-persist'

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
    return {store, persistor}
}

export const {store, persistor} = configureStore({})

