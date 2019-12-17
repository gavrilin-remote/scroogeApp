import React from 'react';
import {Header, Left, Button, Icon, Body, Right, Title} from 'native-base'

const StackHeader = ({navigation, title, withBack, ...props}) => {
    return (
        <Header {...props}>
            <Left>
                {
                    withBack
                        ? <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                        : null
                }
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right/>
        </Header>
    );
};


export default StackHeader;