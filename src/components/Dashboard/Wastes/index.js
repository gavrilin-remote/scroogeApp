import React, {PureComponent} from 'react';
import {Body, Card, CardItem, Content, H3, Right, Text, ListItem} from "native-base";
import {TouchableOpacity, StyleSheet, FlatList} from "react-native";
import DatePicker from "../../common/DatePicker";
import moment from "moment";
import Modal from "../../common/Modal";
import WasteForm from "./add";
import CurrencyLabel from "../../common/Currency";

class WasteComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: moment.utc(),
            modal: React.createRef(),
            monthSpent: 0
        };
    }

    static getDerivedStateFromProps = (props, state) => {
        const derivedMonthSpent = props.monthsSpent[state.chosenDate.format('YYYY.MM')] || 0;
        if (derivedMonthSpent !== state.monthSpent) {
            return {
                monthSpent: derivedMonthSpent
            }
        }
        return {}
    };

    getMonthSpent = () => this.setState(({chosenDate}) =>
        ({monthSpent: this.props.monthsSpent[chosenDate.format('YYYY.MM')] || 0}));

    setDate = (newDate) => {
        this.setState({chosenDate: moment.utc(newDate)}, this.getMonthSpent);
    };

    showAddWasteForm = () => {
        const {modal} = this.state;
        modal.current.setModalVisible(true);
    };

    onAddWaste = (waste) => {
        const {addWaste} = this.props;
        const {modal} = this.state;
        addWaste(waste);
        modal.current.setModalVisible(false);
    };

    renderListItem = ({item}) => {
        return (
            <ListItem style={styles.listItem}>
                <Text>{item.value} <CurrencyLabel/></Text>
                <Text>{moment.utc(item.spentAt).format('HH:MM:SS d.M.YYYY')}</Text>
            </ListItem>
        )
    };

    renderListHeader =() =>(<Text style={{paddingLeft:10}}>Wastes history:</Text>)

    render() {
        const {totalSpent, wastes} = this.props;
        const {chosenDate, modal, monthSpent} = this.state;
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <H3>Total spent</H3>
                            <Text>{totalSpent} <CurrencyLabel/></Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <H3>{`Spent for ${chosenDate.format('MMMM YYYY')}`}</H3>
                            <Text>{monthSpent} <CurrencyLabel/></Text>
                        </Body>
                        <Right>
                            <DatePicker
                                onDateChange={this.setDate}
                            />
                        </Right>
                    </CardItem>
                </Card>
                <TouchableOpacity
                    onPress={this.showAddWasteForm}
                    style={styles.spentButton}
                >
                    <H3 style={{textTransform: 'uppercase'}}>Spent</H3>
                </TouchableOpacity>
                <FlatList
                    data={wastes}
                    style={{width: '100%', maxHeight: 600}}
                    renderItem={this.renderListItem}
                    ListHeaderComponent={this.renderListHeader}
                    keyExtractor={item => item.id}
                />
                <Modal ref={modal}>
                    <WasteForm
                        onSubmit={this.onAddWaste}
                    />
                </Modal>
            </Content>
        );
    }
}

export default WasteComponent;

const styles = StyleSheet.create({
    spentButton: {
        marginVertical: 20,
        alignSelf: 'center',
        width: 150,
        height: 150,
        backgroundColor: "#D3BFBA",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#8DA5CE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        minHeight: 40, flexDirection: 'row', justifyContent: 'space-between'
    }
})