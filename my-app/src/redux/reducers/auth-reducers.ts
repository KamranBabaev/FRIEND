import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

type actionType = SetUserDataActionType
const SET_USER_DATA = 'SET-USER-DATA'
export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;

type InitStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isFetching: boolean
}

const initState: InitStateType = {
  id: null,
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
      }
    default:
      return state
  }
}

export const setAuthUserDataAC = (id: number | null,
                                  email: string | null,
                                  login: string | null,
                                  isAuth: boolean) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuth,}} as const);


export const getAuthUserDataTC = () => {
  return (dispatch: any) => {
    return authAPI.getMe()
        .then(data => {
          debugger
              if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
              }
            }
        )
  }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
          debugger
              if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
              } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : ''
                let action = stopSubmit('login',
                    {_error: message})
                dispatch(action)
              }
            }
        )
  }
}

export const logoutTC = () => {
  return (dispatch: any) => {
    authAPI.logout()
        .then(res => {
              if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
              }
            }
        )
  }
}
