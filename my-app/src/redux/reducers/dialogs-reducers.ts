const ADD_MESSAGE = 'ADD-MESSAGE';

type AddMessageAT = {
  type: 'ADD-MESSAGE'
  newMessageText: string
}

type ActionType = AddMessageAT

let initialState = {
  dialogs: [
    {id: 1, name: 'Василий'},
    {id: 2, name: 'Петр'},
  ],

  messages: [
    {id: 1, message: 'Привет, как дела?'},
    {id: 2, message: 'Пошли пройдемся!'},
  ],
}

export const dialogsReducer = (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogs: [...state.dialogs],
        messages: [...state.messages, {id: 10, message: action.newMessageText}],
      }
    default:
      return state
  }
}

export const addMessageAC = (newMessageText: string): AddMessageAT => ({
  type: ADD_MESSAGE,
  newMessageText
})