import React, {PureComponent} from 'react';
import SettingsComponent from "../../components/Settings";
import StackHeader from "../../components/NavigationElements/Header";
import {connect} from 'react-redux'

class SettingsContainer extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        header: (
            <StackHeader
                navigation={navigation}
                title={'Settings'}
            />
        )
    });

    render() {
        return (
            <SettingsComponent

            />
        );
    }
}

const mapStateToProps =
    () => ({

    });


export default connect(mapStateToProps, {})(SettingsContainer)