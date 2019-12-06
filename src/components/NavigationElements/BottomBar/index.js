import React from 'react';
import {Footer, FooterTab, Button, Icon, Text} from "native-base";

const BottomBar = (props) => {
    return (
        <Footer>
            <FooterTab>
                <Button
                    vertical
                    active={props.navigation.state.index === 0}
                    onPress={() => props.navigation.navigate("Dashboard")}>
                    <Icon name="home" />
                    <Text>Dashboard</Text>
                </Button>
                <Button
                    vertical
                    active={props.navigation.state.index === 1}
                    onPress={() => props.navigation.navigate("Settings")}>
                    <Icon name="settings" />
                    <Text>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default BottomBar;