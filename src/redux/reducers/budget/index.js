import budgetTypes from './types.js'
import moment from 'moment'
import _ from 'lodash';

const {SET_MONTH_BUDGET} = budgetTypes;

const initialState = {
    totalBudget: 0,
    monthsBudget: {}
};

const calculateTotalBudget = (monthsBudget) => _.sum(Object.values(monthsBudget));

const budget = (state = initialState || {}, action) => {
    switch (action.type) {
        case(SET_MONTH_BUDGET): {

            const {month, budget} = action.payload;
            const monthKey = moment.utc(month).format('YYYY.MM');
            const newMonthsBudget = {...state.monthsBudget, [monthKey]: budget};
            return {
                ...state,
                monthsBudget: newMonthsBudget,
                totalBudget: calculateTotalBudget(newMonthsBudget)
            }

        }
        default:
            return state
    }

};

export default budget