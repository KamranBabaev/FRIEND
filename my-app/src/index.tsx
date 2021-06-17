import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store';


const rerenderEntireTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();
