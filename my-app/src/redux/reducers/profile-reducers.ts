import {ActionType, AddNewPostAT, AddPostAT, PostsType} from "../state";

const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const profileReducer = (state: any, action: ActionType) => {

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