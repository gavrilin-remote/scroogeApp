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
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react'
import Loader from "./src/components/Loader";

const AppContainer = createAppContainer(AppNavigator);

const setNavigatorRef = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
};

const getLoaderForPersistGate = () =><Loader full />;

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <Provider store={store}>
                <StyleProvider style={getTheme(common)}>
                    <PersistGate loading={getLoaderForPersistGate()} persistor={persistor}>
                        <AppContainer ref={setNavigatorRef}/>
                    </PersistGate>
                </StyleProvider>
            </Provider>
        </>
    );
};
export default App;