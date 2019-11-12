import HomeScreen from './containers/Home'
import {createStackNavigator} from 'react-navigation'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
});

export default AppNavigator