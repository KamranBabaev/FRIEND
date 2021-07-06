const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type AddMessageAT = {
    type: 'ADD-MESSAGE'
}
type AddNewMessageAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

type ActionType = AddMessageAT | AddNewMessageAT

let initialState = {
    dialogs: [
        {id: 1, name: 'Василий'},
        {id: 2, name: 'Петр'},
    ],

    messages: [
        {id: 1, message: 'Привет, как дела?'},
        {id: 2, message: 'Пошли пройдемся!'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: any = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 3, message: state.newMessageText}
            return {
                ...state,
                dialogs: [...state.dialogs],
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageAT => ({type: ADD_MESSAGE})

export const updateNewMessageTextAC = (text: string): AddNewMessageAT => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
})