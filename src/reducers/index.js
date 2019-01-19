import { combineReducers } from "redux";

const INITIAL_STATE = {
    students: []
}

const studentReducers = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STUDENT':
            return action.payload
        case 'INSERT_STUDENT':
            action.payload.ID = state.length + 1;
            return state = state.concat(action.payload)
        case 'UPDATE_STUDENT':
            return state.map((item) => {
                if (item.ID === action.payload.ID) {
                    return {
                        ID: action.payload.ID,
                        Name: action.payload.Name,
                        Address: action.payload.Address,
                        Mobile: action.payload.Mobile
                    }
                }
                else {
                    return item;
                }
            })
        case 'DELETE_STUDENT':
            return state = state.filter((item) => item.ID !== action.payload.ID)

    }
    return state;

}, rootReducers = combineReducers({
    students: studentReducers

})

export default rootReducers;