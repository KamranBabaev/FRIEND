import {profileReducer} from "./reducers/profile-reducers";
import {dialogsReducer} from "./reducers/dialogs-reducers";
import {sidebarReducer} from "./reducers/sidebar-reducers";

export type SidebarType = {
    friend: Array<FriendType>
}
export type FriendType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    title: string
    likeCounts: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
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
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}
export type AddPostAT = {
    type: 'ADD-POST'
}
export type AddNewPostAT = {
    type: 'ADD-NEW-POST-TEXT'
    newPostText: string
}
export type AddMessageAT = {
    type: 'ADD-MESSAGE'
}
export type AddNewMessageAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type ActionType = AddPostAT | AddMessageAT | AddNewPostAT | AddNewMessageAT
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'Уволился с работы, учу JS и REACT!', likeCounts: 22},
                {id: 2, title: 'Учу реакт 1 месяц, летим', likeCounts: 19},
            ],
            newPostText: ''
        },

        messagePage: {
            dialogs: [
                {id: 1, name: 'Кларк'},
                {id: 2, name: 'Питер'},
            ],

            messages: [
                {id: 1, message: 'Хей, привет'},
                {id: 2, message: 'Как у тебя дела,'},
            ],
            newMessageText: ''
        },

        sidebar: {
            friend: [
                {id: 1, name: 'Брюс'},
                {id: 2, name: 'Тор'},
                {id: 3, name: 'Мэт'},
                {id: 4, name: 'Бари'},
                {id: 5, name: 'Тони'},
                {id: 6, name: 'Стив'},
            ]
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store;