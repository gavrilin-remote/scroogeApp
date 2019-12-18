import moment from 'moment'
import {uuid} from "../../../helpers";
import {ADD_WASTE, REMOVE_WASTE} from "./types";
import _ from 'lodash'

const initialState = {
    totalSpent: 0,
    wastes: [],
    monthsSpent: {}
};

const calculateTotalSpent = (monthsSpent) => _.sum(Object.values(monthsSpent));

const waste = (state = initialState || {}, action) => {
    switch (action.type) {
        case (ADD_WASTE): {
            const {spentAt, value} = action.payload;
            const monthKey = moment.utc(spentAt).format('YYYY.MM');
            const monthsSpent = {
                ...state.monthsSpent,
                [monthKey]: state.monthsSpent[monthKey]
                    ? state.monthsSpent[monthKey] + value
                    : value
            };
            return {
                ...state,
                wastes: [{...action.payload, id: uuid('waste')}, ...state.wastes],
                monthsSpent,
                totalSpent: calculateTotalSpent(monthsSpent)
            }
        }
        case (REMOVE_WASTE): {
            const {id} = action.payload;
            const waste = state.wastes.find(item => item.id === id);
            if (waste) {
                const {spentAt, value} = waste;
                const monthKey = moment.utc(spentAt).format('YYYY.MM');
                const monthsSpent = {...state.monthsSpent, [monthKey]: state.monthsSpent[monthKey] - value};
                return {
                    ...state,
                    wastes: state.wastes.filter(item => item.id !== id),
                    monthsSpent,
                    totalSpent: calculateTotalSpent(monthsSpent)
                }
            }
            return state
        }
        default:
            return state
    }

};

export default waste