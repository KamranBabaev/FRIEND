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

type AddPostType = {
    type :'ADD-POST'
    newPostText: string
}
type AddMessageType = {
    type :'ADD-MESSAGE'
}
type AddNewPostType = {
    type :'ADD-NEW-POST-TEXT'
    newPostText: string
}
type AddNewMessageType = {
    type :'ADD-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export type ActionType =  AddPostType | AddMessageType | AddNewPostType | AddNewMessageType

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
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {id: 5, title: this._state.profilePage.newPostText, likeCounts: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {id: 3, message: this._state.messagePage.newMessageText}
            this._state.messagePage.messages.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        }
    },

}

export default store;