import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostsType = {
    id: number
    title: string
    likeCounts: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type MessagePageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, title: 'Уволился с работы, учу JS и REACT!', likeCounts: 22},
            {id: 2, title: 'Учу реакт 1 месяц, летим', likeCounts: 19},
        ],
    },

    messagePage: {
        dialogs: [
            {id: 1, name: 'Кларк'},
            {id: 2, name: 'Питер'},
        ],

        messages: [
            {id: 1, message: 'Хей, привет'},
            {id: 2, message: 'Давай пройдемся?'},
        ],
    },
}
ReactDOM.render(<App state={state} />, document.getElementById('root'))

reportWebVitals();
