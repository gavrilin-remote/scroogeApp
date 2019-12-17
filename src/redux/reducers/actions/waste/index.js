import {ADD_WASTE, REMOVE_WASTE} from "../../waste/types";

export const addWaste = (waste) => ({
    type: ADD_WASTE,
    payload: waste
});

export const removeWaste = (id) => ({
    type: REMOVE_WASTE,
    payload: {id}
});
