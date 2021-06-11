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
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    addNewPostText: (newPostText: string) => void
    addMessage: () => void
    addNewMessageText: (newPostText: string) => void
    subscribe: (observer: any) => void
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

    _callSubscriber() {},

    getState () { return this._state},

    addPost() {
        const newPost: PostsType = {id: 5, title: this._state.profilePage.newPostText, likeCounts: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    addNewPostText(newPostText) {
        debugger
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },

    addMessage() {
        const newMessage: MessageType = {id: 3, message: this._state.messagePage.newMessageText}
        this._state.messagePage.messages.push(newMessage)
        this._state.messagePage.newMessageText = ''
        this._callSubscriber(this._state)
    },

    addNewMessageText(newMessageText) {
        this._state.messagePage.newMessageText = newMessageText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

}

export default store;