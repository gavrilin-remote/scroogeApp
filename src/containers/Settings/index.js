import React, {Component} from 'react';
import SettingsComponent from "../../components/Settings";
import StackHeader from "../../components/NavigationElements/Header";

class SettingsContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <StackHeader
                navigation={navigation}
                title={'Settings'}
            />
        )
    });

    render() {
        return (
            <SettingsComponent/>
        );
    }
}

export default SettingsContainer