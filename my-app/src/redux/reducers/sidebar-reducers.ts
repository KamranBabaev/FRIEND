import {ActionType} from "../store";

let initialState = {
    friend: [
        {id: 1, name: 'Брюс'},
        {id: 2, name: 'Тор'},
        {id: 3, name: 'Мэт'},
        {id: 4, name: 'Бари'},
        {id: 5, name: 'Тони'},
        {id: 6, name: 'Стив'},
    ]
}

export const sidebarReducer = (state: any = initialState, action: ActionType) => {
    return state
}