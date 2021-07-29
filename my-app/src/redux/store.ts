import {profileReducer} from "./reducers/profile-reducers";
import {dialogsReducer} from "./reducers/dialogs-reducers";
import {sidebarReducer} from "./reducers/sidebar-reducers";
import {ProfileDataType} from "../components/Profile/ProfileContainer";

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
    text: string
    profile: ProfileDataType | null
    status: string
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

export type ActionType = AddPostAT | AddNewPostAT
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'Это первый пост для соц сети', likeCounts: 22},
                {id: 2, title: 'Второй пост, креатив не твое...', likeCounts: 19},
            ],
            text: '',
            profile: null,
            status: ''
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