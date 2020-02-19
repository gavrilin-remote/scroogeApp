import React, {memo} from 'react';
import {connect} from 'react-redux';
import {Text} from 'native-base';

const CurrencyLabel = memo(({userCurrency, ...props}) => {
    return (
        <Text
            style={{
                fontSize: 10,
            }}
            {...props}
        >
            {userCurrency}
        </Text>
    );
});

const mapStateToProps = ({settings: {userCurrency}}) => ({userCurrency});

export default connect(mapStateToProps)(CurrencyLabel);