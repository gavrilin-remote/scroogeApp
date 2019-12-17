import React, {PureComponent} from 'react';
import {Container, Content, H3, Form, Item, Label, Input, Card, CardItem, Body, Text, Right, Button} from 'native-base';
import moment from 'moment'
import DatePicker from '../../common/DatePicker'
import Modal from '../../common/Modal'

class BudgetComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: moment.utc(),
            modal: React.createRef(),
            monthBudget: 0
        };
    }

    componentDidMount() {
        this.getMonthBudget()
    }

    getMonthBudget = () => this.setState(({chosenDate}) =>
        ({monthBudget: this.props.monthsBudget[chosenDate.format('YYYY.MM')] || 0}));

    setDate = (newDate) => {
        this.setState({chosenDate: moment.utc(newDate)}, this.getMonthBudget);
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
        const {totalBudget} = this.props;
        const {chosenDate, modal, monthBudget} = this.state;
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <H3>Total budget</H3>
                                <Text>{totalBudget}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <H3>{`Budget for ${chosenDate.format('MMMM YYYY')}`}</H3>
                                <Text>{monthBudget}</Text>
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
                </Content>
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
            </Container>
        )
    }
}

export default BudgetComponent;