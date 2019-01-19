import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as index from "../actions/index";
import rootReducers from "../reducers/index";
import Home from "../components/Home";

const customMiddleware = store => next =>action =>{
    if(action.shouldConfirm){
        if(confirm('delete')){
            next(action)
        }
    }
    else
    {
        next(action)
    }
}

let store = createStore(rootReducers, applyMiddleware(thunk,customMiddleware));
store.dispatch(index.GET_STUDENTS());



render(
    <Provider store={store}>
        <Home />
    </Provider>, document.getElementById('app')
)