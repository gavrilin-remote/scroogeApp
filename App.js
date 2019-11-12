/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './src/navigation'
import NavigationService from './src/services/NavigationService';

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
    return (
        <AppContainer
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        />
    );
};
export default App;
