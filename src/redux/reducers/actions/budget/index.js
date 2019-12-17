import budgetTypes from '../../budget/types';

const {SET_MONTH_BUDGET} = budgetTypes;

export const setMonthBudget = (month, budget) => ({
    type: SET_MONTH_BUDGET,
    payload: {
        month, budget
    }
});
