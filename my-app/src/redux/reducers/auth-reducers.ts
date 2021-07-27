import {authAPI} from "../../api/api";

type actionType = setAuthUserDataType

const SET_USER_DATA = 'SET-USER-DATA'

type AuthUserDataType = {
  userID: string | null
  login: string | null
  email: string | null
}

type setAuthUserDataType = {
  type: 'SET-USER-DATA'
  data: AuthUserDataType
}

type InitStateType = {
  userID: string | null
  login: string | null
  email: string | null
  isAuth: boolean
  isFetching: boolean
}

const initState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}

export const authReducer = (
    state: InitStateType = initState,
    action: actionType): InitStateType => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

export const setAuthUserDataAC = (
    userID: string | null,
    email: string | null,
    login: string | null
): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: {userID, email, login}
})


export const getAuthUserDataAC = () => {
  return (dispatch: any) => {
    authAPI.getMe().then(data => {
          if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserDataAC(id, email, login))
          }
        }
    )
  }
}
