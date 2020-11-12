import { loadItemsError, loadItemsProgress, loadItemsSuccess } from "../actions/actions";
import * as list from '../data/users.json';

export const loadItems = () => async (dispatch) => {
    try {
        dispatch(loadItemsProgress());       
        dispatch(loadItemsSuccess(list));

    } catch (e) {
        dispatch(loadItemsError());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = item => () => {
    alert(`${item}`);
}