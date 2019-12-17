import React, {Component} from 'react';
import WasteComponent from "../../../components/Dashboard/Wastes";
import {connect} from 'react-redux'
import {addWaste, removeWaste} from "../../../redux/reducers/actions/waste";

class WasteContainer extends Component {
    render() {
        const {totalSpent, wastes, monthsSpent, addWaste, removeWaste} = this.props;
        return (
            <WasteComponent
                totalSpent={totalSpent}
                wastes={wastes}
                addWaste={addWaste}
                removeWaste={removeWaste}
                monthsSpent={monthsSpent}
            />
        );
    }
}

const mapStateToProps =
    ({
         waste: {
             totalSpent,
             wastes,
             monthsSpent,
         }
     }) => ({
        totalSpent,
        wastes,
        monthsSpent
    });

export default connect(mapStateToProps, {addWaste, removeWaste})(WasteContainer);