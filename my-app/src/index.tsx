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
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 addNewPostText={store.addNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 addNewMessageText={store.addNewMessageText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)





reportWebVitals();
