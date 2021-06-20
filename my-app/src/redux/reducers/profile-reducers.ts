import {ActionType, AddNewPostAT, AddPostAT, PostsType} from "../store";

const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, title: 'Учу JS и REACT!', likeCounts: 22},
        {id: 2, title: 'Учу реакт 1 месяц, летим', likeCounts: 19},
    ],
    newPostText: ''
}

export const profileReducer = (state: any = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {id: 5, title: state.newPostText, likeCounts: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case ADD_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state

        default:
            return state
    }
}

export const addPostAC = (): AddPostAT => ({type: ADD_POST})

export const updateNewPostTextAC = (text: string): AddNewPostAT => ({type: ADD_NEW_POST_TEXT, newPostText: text})