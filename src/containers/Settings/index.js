import React, {PureComponent} from 'react';
import SettingsComponent from "../../components/Settings";
import StackHeader from "../../components/NavigationElements/Header";
import {connect} from 'react-redux'
import {getCurrencies, pickCurrency} from "../../redux/reducers/actions/settings";

class SettingsContainer extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        header: (
            <StackHeader
                navigation={navigation}
                title={'Settings'}
            />
        )
    });

    componentDidMount(): void {
        this.props.getCurrencies()
    }

    render() {
        const {
            userCurrency,
            currencies,
            isGettingCurrencies,
            pickCurrency
        } = this.props;
        return (
            <SettingsComponent
                pickCurrency={pickCurrency}
                userCurrency={userCurrency}
                currencies={currencies}
                isGettingCurrencies={isGettingCurrencies}
            />
        );
    }
}

const mapStateToProps =
    ({
         settings: {
             userCurrency,
             currencies,
             isGettingCurrencies
         }
     }) => ({
        userCurrency,
        currencies,
        isGettingCurrencies
    });


export default connect(mapStateToProps, {getCurrencies, pickCurrency})(SettingsContainer)