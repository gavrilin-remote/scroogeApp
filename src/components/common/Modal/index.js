import React, {PureComponent} from 'react';
import {Modal} from 'react-native';

class ModalComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    setModalVisible(visible) {
        this.setState({visible: visible});
    }

    render() {
        const {children, ...props} = this.props;
        const {visible} = this.state;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                {...props}
            >
                {children}
            </Modal>
        );
    }
}

export default ModalComponent;