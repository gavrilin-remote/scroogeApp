import React, {PureComponent} from 'react';
import {Container, Content, H3, Form, Item, Label, Input, Card, CardItem, Body, Text, Right, Button} from 'native-base';
import {View} from 'react-native'
import moment from 'moment'
import DatePicker from '../../common/DatePicker'
import Modal from '../../common/Modal'
import CurrencyLabel from "../../common/Currency";

class BudgetComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: moment.utc(),
            modal: React.createRef(),
            monthBudget: 0,
            monthSpent: 0
        };
    }

    componentDidMount() {
        this.getMonthBudget();
        this.getMonthSpent();
    }

    getMonthBudget = () => this.setState(({chosenDate}) =>
        ({monthBudget: this.props.monthsBudget[chosenDate.format('YYYY.MM')] || 0}));

    getMonthSpent = () => this.setState(({chosenDate}) =>
        ({monthSpent: this.props.monthsSpent[chosenDate.format('YYYY.MM')] || 0}));

    setDate = (newDate) => {
        this.setState({chosenDate: moment.utc(newDate)}, () => {
            this.getMonthBudget();
            this.getMonthSpent()
        });
    };

    showMonthBudgetForm = () => {
        const {modal} = this.state;
        modal.current.setModalVisible(true);
    };

    setInputValue = (value) => this.setState({monthBudget: value});

    setMonthBudget = () => {
        const {chosenDate, monthBudget, modal} = this.state;
        const {setMonthBudget} = this.props;
        setMonthBudget(chosenDate, +monthBudget);
        modal.current.setModalVisible(false);
    };

    render() {
        const {totalBudget, totalSpent} = this.props;
        const {chosenDate, modal, monthBudget, monthSpent} = this.state;
        return (
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <H3>Total budget</H3>
                            <View style={{flexDirection: 'row'}}>
                                <Text>{totalBudget - totalSpent}<CurrencyLabel/></Text>
                                <Text style={{color: 'red'}}>({totalSpent})<CurrencyLabel/></Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <H3>{`Budget for ${chosenDate.format('MMMM YYYY')}`}</H3>
                            <View style={{flexDirection: 'row'}}>
                                <Text>{monthBudget - monthSpent}<CurrencyLabel/></Text>
                                <Text style={{color: 'red'}}>({monthSpent})<CurrencyLabel/></Text>
                            </View>
                        </Body>
                        <Right>
                            <DatePicker
                                onDateChange={this.setDate}
                            />
                        </Right>
                    </CardItem>
                </Card>
                <Button onPress={this.showMonthBudgetForm} bordered>
                    <Text>Set month budget</Text>
                </Button>
                <Modal ref={modal}>
                    <Content
                        contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        padder
                    >
                        <Form style={{width: '100%'}}>
                            <Item floatingLabel>
                                <Label>{`Budget for ${chosenDate.format('MMMM YYYY')}`}</Label>
                                <Input
                                    value={String(monthBudget)}
                                    onChangeText={this.setInputValue}
                                    keyboardType='numeric'
                                />
                            </Item>
                            <Button onPress={this.setMonthBudget} style={{marginTop: 20}} rounded bordered>
                                <Text>Save</Text>
                            </Button>
                        </Form>
                    </Content>
                </Modal>
            </Content>
        )
    }
}

export default BudgetComponent;