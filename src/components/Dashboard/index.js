import React, {Component} from 'react';
import {Container, Segment, Content, Button, Text} from 'native-base';
import WastesContainer from '../../containers/Dashboard/Wastes'
import BudgetContainer from '../../containers/Dashboard/Budget'

const SEGMENTS = ['Wastes', 'Budget'];

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSegment: 0
        }
    }

    toggleSegment = (index) => this.setState({activeSegment: index});

    _renderContent = () => {
        const {activeSegment} = this.state;
        switch (activeSegment) {
            case(0): {
                return <WastesContainer/>
            }
            case(1): {
                return <BudgetContainer/>
            }
        }
    };

    render() {
        const {activeSegment} = this.state;
        return (
            <Container>
                <Segment>
                    {SEGMENTS.map((key, index) => (
                        <Button
                            onPress={() => this.toggleSegment(index)}
                            key={key}
                            active={index === activeSegment}
                            first={index === 0}
                            last={index === SEGMENTS.length - 1}
                        >
                            <Text>{key}</Text>
                        </Button>
                    ))}
                </Segment>
                {this._renderContent()}
            </Container>
        );
    }
}

export default DashboardComponent;
