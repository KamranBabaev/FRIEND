import {PostsType} from "../store";

type ActionType = AddPostAT | setUsersProfileAT | updateNewPostTextAC


type AddPostAT = {
    type: 'ADD-POST'
}

type setUsersProfileAT = {
    type: 'SET-USER-PROFILE'
    profile: any
}

type updateNewPostTextAC = {
    type: 'ADD-NEW-POST-TEXT'
    text: string
}

type InitialType = {
    posts: Array<PostsType>
    text: string
    profile: any
}

const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, title: 'Первый пост для соц сети.', likeCounts: 22},
        {id: 2, title: 'Второй пост, креатив не мое...', likeCounts: 19},
    ],
    text: '',
    profile: null
}

export const profileReducer = (state: InitialType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {id: 5, title: state.text, likeCounts: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                text: ''
            }

        case ADD_NEW_POST_TEXT:
            return {
                ...state,
                text: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }

        default:
            return state
    }
}

export const addPostAC = (): AddPostAT => ({type: ADD_POST})

export const setUsersProfile = (profile: any): setUsersProfileAT => ({type: SET_USER_PROFILE, profile})

export const updateNewPostTextAC = (text: string): updateNewPostTextAC => ({type: ADD_NEW_POST_TEXT, text})