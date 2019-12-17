import React, {PureComponent} from 'react';
import BudgetComponent from "../../../components/Dashboard/Budget";
import {connect} from 'react-redux'
import {setMonthBudget} from "../../../redux/reducers/actions/budget";

class BudgetContainer extends PureComponent {

    render() {
        const {setMonthBudget, totalBudget, monthsBudget} = this.props;
        return (
            <BudgetComponent
                setMonthBudget={setMonthBudget}
                totalBudget={totalBudget}
                monthsBudget={monthsBudget}
            />
        );
    }
}

const mapStateToProps =
    ({
         budget: {
             totalBudget,
             monthsBudget
         }
     }) => ({
        totalBudget,
        monthsBudget
    });


export default connect(mapStateToProps, {setMonthBudget})(BudgetContainer)