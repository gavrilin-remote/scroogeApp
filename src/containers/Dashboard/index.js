import React, {Component} from 'react';
import DashboardComponent from '../../components/Dashboard'
import StackHeader from "../../components/NavigationElements/Header";

class DashboardContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <StackHeader
                navigation={navigation}
                title={'Dashboard'}
            />
        )
    });

    render() {
        return (
            <DashboardComponent/>
        );
    }
}

export default DashboardContainer;