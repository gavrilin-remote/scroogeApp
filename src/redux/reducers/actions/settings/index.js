import {GET_CURRENCIES_FAIL, PICK_CURRENCY, GET_CURRENCIES_SUCCESS, GET_CURRENCIES} from "../../settings/types";
import axios from 'axios'
import {config} from '../../../../../config'

export const getCurrencies = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_CURRENCIES
        });
        // const {userCurrency} = getState().settings;
        const currencies =
            await axios.get(`https://currencyapi.net/api/v1/rates?key=${config.currencyApi.apiKey}`);
        dispatch({
            type: GET_CURRENCIES_SUCCESS,
            payload: currencies.data.rates
        });
    } catch (e) {
        dispatch({
            type: GET_CURRENCIES_FAIL
        });
        throw(e)
    }
};

export const pickCurrency = (currency) => ({
    type: PICK_CURRENCY,
    payload: currency
});
