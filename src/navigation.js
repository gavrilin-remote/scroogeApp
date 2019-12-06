import DashboardScreen from './containers/Dashboard'
import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import AuthLoadingScreen from './containers/Auth/AuthLoading'
import SignInContainer from "./containers/Auth/SignIn";
import BottomBar from "./components/NavigationElements/BottomBar";
import SettingsContainer from './containers/Settings'

const DashboardStack = createStackNavigator({
    Main: DashboardScreen,
});
const SettingsStack = createStackNavigator({
    Settings: SettingsContainer,
});

const AuthStack = createStackNavigator({
    SignIn: SignInContainer,
});

const AppNavigator = createBottomTabNavigator(
    {
        Dashboard: DashboardStack,
        Settings: SettingsStack,
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: BottomBar
    }
);

const AppRootNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default AppNavigator