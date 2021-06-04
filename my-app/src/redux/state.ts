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
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}


let state: StateType = {
    profilePage: {
        posts:
            [
                {id: 1, title: 'Уволился с работы, учу JS и REACT!', likeCounts: 22},
                {id: 2, title: 'Учу реакт 1 месяц, летим', likeCounts: 19},
            ],
    },

    messagePage: {
        dialogs: [
            {id: 1, name: 'Кларк'},
            {id: 2, name: 'Питер'},
        ],

        messages: [
            {id: 1, message: 'Хей, привет'},
            {id: 2, message: 'Давай пройдемся?'},
        ],
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
}

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {id: 5, title: postMessage, likeCounts: 0}
    state.profilePage.posts.push(newPost)
}

export default state;