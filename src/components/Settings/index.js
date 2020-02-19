import React, {PureComponent} from 'react';
import {Container, Content, Picker, Card, CardItem, Text, Icon} from 'native-base';
import Loader from "../Loader";

class SettingsComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            userCurrency,
            currencies,
            isGettingCurrencies,
            pickCurrency
        } = this.props;
        return (
            <Container>
                <Content padder>
                    {isGettingCurrencies
                        ? <Loader/>
                        : <Card>
                            <CardItem header>
                                <Text>Base currency</Text>
                            </CardItem>
                            <CardItem>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Pick currency"
                                    iosIcon={<Icon name="arrow-down"/>}
                                    style={{width: undefined}}
                                    selectedValue={userCurrency || "USD"}
                                    onValueChange={pickCurrency}
                                >
                                    {Object.entries(currencies).map(([key, value]) => (
                                            <Picker.Item key={key} label={`${key} rates(${value} : 1 USD)`} value={key}/>
                                        )
                                    )}
                                </Picker>
                            </CardItem>
                        </Card>
                    }
                </Content>
            </Container>
        )
    }
}

export default SettingsComponent;