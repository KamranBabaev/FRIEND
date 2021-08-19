import {profileAPI} from "../../api/api";
import {ProfileDataType} from "../../utils/types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const DELETE_POST = 'DELETE-POST'

type ActionType =
    AddPostAT
    | setUsersProfileAT
    | setUserStatusAT
    | deletePostAT


type AddPostAT = {
  type: 'ADD-POST'
  newPostText: string
}
type setUsersProfileAT = {
  type: 'SET-USER-PROFILE'
  profile: any
}

type setUserStatusAT = {
  type: 'SET-USER-STATUS'
  status: string
}
type deletePostAT = {
  type: 'DELETE-POST'
  postId: any
}

type InitialType = {
  posts: Array<any>
  profile: null | ProfileDataType
  status: string
}

const initialState: InitialType = {
  posts: [
    {id: 1, title: 'Первый пост для соц сети.', likeCounts: 22},
    {id: 2, title: 'Второй пост, креатив не мое...', likeCounts: 19},
  ],
  profile: null,
  status: ''
}

export const profileReducer = (state: InitialType = initialState,
                               action: ActionType) => {
  console.log(action)
  switch (action.type) {
    case ADD_POST:
      let newPost: any = {id: 5, title: action.newPostText, likeCounts: 0}
      return {
        ...state,
        posts: [newPost, ...state.posts],
      }
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      }
    case "DELETE-POST":
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
    default:
      return state
  }
}

export const addPostAC = (newPostText: string): AddPostAT => ({
  type: ADD_POST,
  newPostText
})
export const setUsersProfile = (profile: any): setUsersProfileAT => ({
  type: SET_USER_PROFILE,
  profile
})

export const setUserStatusAC = (status: string): setUserStatusAT => ({
  type: SET_USER_STATUS,
  status
})
export const deletePost = (postId: any): deletePostAT => ({
  type: DELETE_POST,
  postId
})

export const getUsersProfile = (userId: string) => async (dispatch: any) => {
  let promise = await profileAPI.getUserByID(userId)
  dispatch(setUsersProfile(promise.data))
}
export const getUserStatus = (userId: string) => async (dispatch: any) => {
  let promise = await profileAPI.getStatus(userId)
  dispatch(setUserStatusAC(promise.data))
}
export const userUpdateStatus = (status: string) => async (dispatch: any) => {
  let promise = await profileAPI.updateStatus(status)
  if (promise.data.resultCode === 0)
    dispatch(setUserStatusAC(status))
}
