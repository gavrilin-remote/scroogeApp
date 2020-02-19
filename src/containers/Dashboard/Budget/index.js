import React, {PureComponent} from 'react';
import BudgetComponent from "../../../components/Dashboard/Budget";
import {connect} from 'react-redux'
import {setMonthBudget} from "../../../redux/reducers/actions/budget";

class BudgetContainer extends PureComponent {

    render() {
        const {
            setMonthBudget,
            totalBudget,
            monthsBudget,
            totalSpent,
            monthsSpent
        } = this.props;
        return (
            <BudgetComponent
                setMonthBudget={setMonthBudget}
                totalBudget={totalBudget}
                monthsBudget={monthsBudget}
                totalSpent={totalSpent}
                monthsSpent={monthsSpent}
            />
        );
    }
}

const mapStateToProps =
    ({
         budget: {
             totalBudget,
             monthsBudget
         },
         waste: {
             totalSpent,
             monthsSpent
         }
     }) => ({
        totalBudget,
        monthsBudget,
        totalSpent,
        monthsSpent
    });


export default connect(mapStateToProps, {setMonthBudget})(BudgetContainer)