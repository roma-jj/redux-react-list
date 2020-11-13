import { loadItemsError, loadItemsProgress, loadItemsSuccess } from "../actions/actions";
import axios from 'axios';

export const loadItems = () => async (dispatch) => {
    try {
        dispatch(loadItemsProgress()); 
        const response = await axios.get(
            `http://localhost:3000/users`
        );
        const list = await response.data;
        
        dispatch(loadItemsSuccess(list));

    } catch (e) {
        dispatch(loadItemsError());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = item => () => {
    alert(`${item}`);
}