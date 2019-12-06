import React from 'react';
import {View} from 'react-native'
import {Spinner} from 'native-base'
import styles from './styles'

const Loader = ({style, full, color}) => {
    return (
        <View style={[
            full && styles.fullContainer,
            style
        ]}>
            <Spinner color={color || 'blue'}/>
        </View>
    );
};

export default Loader;