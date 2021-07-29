import {PostsType} from "../store";
import {profileAPI} from "../../api/api";
import {ProfileDataType} from "../../components/Profile/ProfileContainer";

const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

type ActionType =
    AddPostAT
    | setUsersProfileAT
    | updateNewPostTextAT
    | setUserStatusAT

type AddPostAT = {
  type: 'ADD-POST'
}
type setUsersProfileAT = {
  type: 'SET-USER-PROFILE'
  profile: any
}
type updateNewPostTextAT = {
  type: 'ADD-NEW-POST-TEXT'
  text: string
}
type setUserStatusAT = {
  type: 'SET-USER-STATUS'
  status: string
}
type InitialType = {
  posts: Array<PostsType>
  text: string
  profile: null | ProfileDataType
  status: string
}

const initialState: InitialType = {
  posts: [
    {id: 1, title: 'Первый пост для соц сети.', likeCounts: 22},
    {id: 2, title: 'Второй пост, креатив не мое...', likeCounts: 19},
  ],
  text: '',
  profile: null,
  status: ''
}

export const profileReducer = (state: InitialType = initialState,
                               action: ActionType) => {
  console.log(action)
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
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      }
    default:
      return state
  }
}

export const addPostAC = (): AddPostAT => ({type: ADD_POST})
export const setUsersProfile = (profile: any): setUsersProfileAT => ({
  type: SET_USER_PROFILE,
  profile
})
export const updateNewPostTextAC = (text: string): updateNewPostTextAT => ({
  type: ADD_NEW_POST_TEXT,
  text
})
export const setUserStatusAC = (status: string): setUserStatusAT => ({
  type: SET_USER_STATUS,
  status
})

export const getUsersProfile = (userId: string) => {
  return (dispatch: any) => {
    profileAPI.getUserByID(userId)
        .then(data => {
          console.log(data)
          dispatch(setUsersProfile(data))
        })
  }
}
export const getUserStatus = (userId: string) => {
  return (dispatch: any) => {
    profileAPI.getStatus(userId).then(data => {
      console.log('getUserStatus ===> ', data)
      dispatch(setUserStatusAC(data))
    })
  }
}
export const userUpdateStatus = (status: string) => {
  return (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(resp => {
          if (resp.data.resultCode === 0)
            dispatch(setUserStatusAC(status))
        })
  }
}