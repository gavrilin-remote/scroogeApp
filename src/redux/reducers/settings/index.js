import moment from 'moment'
import _ from 'lodash';
import {GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL, PICK_CURRENCY} from "./types";

const initialState = {
    currencies: {},
    userCurrency: 'USD',

    isGettingCurrencies: false
};

const settings = (state = initialState || {}, action) => {
    switch (action.type) {
        case(GET_CURRENCIES): {
            return {
                ...state,
                isGettingCurrencies: true
            }
        }
        case(GET_CURRENCIES_SUCCESS): {
            return {
                ...state,
                isGettingCurrencies: false,
                currencies: action.payload
            }
        }
        case(GET_CURRENCIES_FAIL): {
            return {
                ...state,
                isGettingCurrencies: false
            }
        }
        case(PICK_CURRENCY):{
            return {
                ...state,
                userCurrency: action.payload
            }
        }
        default:
            return state
    }

};

export default settings