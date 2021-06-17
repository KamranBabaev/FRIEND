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
type AddPostAT = {
    type :'ADD-POST'
}
type AddNewPostAT = {
    type :'ADD-NEW-POST-TEXT'
    newPostText: string
}
type AddMessageAT = {
    type :'ADD-MESSAGE'
}
type AddNewMessageAT = {
    type :'ADD-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type ActionType =  AddPostAT | AddMessageAT | AddNewPostAT | AddNewMessageAT
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionType) => void
}


const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';


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
        if (action.type === ADD_POST) {
            let newPost: PostsType = {id: 5, title: this._state.profilePage.newPostText, likeCounts: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === ADD_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessageType = {id: 3, message: this._state.messagePage.newMessageText}
            this._state.messagePage.messages.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
            this._state.messagePage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        }
    },
}

export const addPostAC = (): AddPostAT => ({type: ADD_POST})

export const onPostOnChangeAC = (text: string): AddNewPostAT =>({type: ADD_NEW_POST_TEXT, newPostText: text})

export const addMessageAC = (): AddMessageAT => ({type: ADD_MESSAGE})

export const onMessageOnChangeAC = (text: string): AddNewMessageAT => ({type: ADD_NEW_MESSAGE_TEXT, newMessageText: text})

export default store;