import React, {PureComponent} from 'react';
import {Button, Content, Form, Input, Item, Label, Text} from "native-base";
import {Alert} from 'react-native'
import moment from 'moment'

class WasteForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            reason: '',
        }
    }

    setInputValue = (value, field) => this.setState({[field]: value});

    onSubmit = () => {
        const {value, reason} = this.state;
        const {onSubmit: handleSubmit} = this.props;
        if (!value) {
            return Alert.alert('Please, fill spent value');
        }
        handleSubmit({value: +value, reason, spentAt: moment.utc().toISOString()})
    };

    render() {
        const {value, reason} = this.state;
        return (
            <Content
                contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                padder
            >
                <Form style={{width: '100%'}}>
                    <Item floatingLabel>
                        <Label>{`Spent`}</Label>
                        <Input
                            value={String(value)}
                            onChangeText={(v) => this.setInputValue(v, 'value')}
                            keyboardType='numeric'
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>{`where was it spent?`}</Label>
                        <Input
                            value={reason}
                            onChangeText={(v) => this.setInputValue(v, 'reason')}
                        />
                    </Item>
                    <Button onPress={this.onSubmit} style={{marginTop: 20}} rounded bordered>
                        <Text>Save</Text>
                    </Button>
                </Form>
            </Content>
        );
    }
}

export default WasteForm;