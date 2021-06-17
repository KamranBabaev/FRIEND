import {ActionType, AddMessageAT, AddNewMessageAT, MessageType} from "../store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Кларк'},
        {id: 2, name: 'Питер'},
    ],

    messages: [
        {id: 1, message: 'Хей, привет'},
        {id: 2, message: 'Как у тебя дела,'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: any = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {id: 3, message: state.newMessageText}
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageAT => ({type: ADD_MESSAGE})

export const updateNewMessageTextAC = (text: string): AddNewMessageAT => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
})