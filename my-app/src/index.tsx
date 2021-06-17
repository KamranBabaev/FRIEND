import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {StateType} from "./redux/state";

const rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

reportWebVitals();
