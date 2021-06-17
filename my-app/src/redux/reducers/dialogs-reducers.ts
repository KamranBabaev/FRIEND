import {ActionType, AddMessageAT, AddNewMessageAT, MessageType} from "../state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: any, action: ActionType) => {

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