import React from 'react';
import {
    StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './src/navigation'
import NavigationService from './src/services/NavigationService';
import {Provider} from 'react-redux'
import {StyleProvider} from 'native-base'
import getTheme from './native-base-theme/components';
import common from './native-base-theme/variables/commonColor';
import {store, persistor, rrfProps} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react'
import Loader from "./src/components/Loader";
import {
    ReactReduxFirebaseProvider
} from 'react-redux-firebase'

const AppContainer = createAppContainer(AppNavigator);

const setNavigatorRef = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
};

const getLoaderForPersistGate = () => <Loader full/>;

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <StyleProvider style={getTheme(common)}>
                        <PersistGate loading={getLoaderForPersistGate()} persistor={persistor}>
                            <AppContainer ref={setNavigatorRef}/>
                        </PersistGate>
                    </StyleProvider>
                </ReactReduxFirebaseProvider>
            </Provider>
        </>
    );
};
export default App;