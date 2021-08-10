import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

type actionType = SetUserDataActionType
export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;

type InitStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

const initState: InitStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (
    state: InitStateType = initState,
    action: actionType): InitStateType => {

  switch (action.type) {
    case 'SET-USER-DATA':
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export const setAuthUserDataAC = (userId: number | null,
                                  email: string | null,
                                  login: string | null,
                                  isAuth: boolean) =>
    ({type: 'SET-USER-DATA', data: {userId, email, login, isAuth,}} as const);


export const getAuthUserDataTC = () => (dispatch: any) => {
  return authAPI.getMe()
      .then(data => {
            if (data.resultCode === 0) {
              let {id, email, login} = data.data
              dispatch(setAuthUserDataAC(id, email, login, true))
            }
          }
      )
}

export const loginTC = (email: string,
                        password: string,
                        rememberMe: boolean) => (dispatch: any) => {
  authAPI.login(email, password, rememberMe)
      .then(res => {
            if (res.data.resultCode === 0) {
              dispatch(getAuthUserDataTC())
            } else {
              let message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error';
              dispatch(stopSubmit('login', {_error: message}))
            }
          }
      )
}

export const logoutTC = () => {
  return (dispatch: any) => {
    authAPI.logout()
        .then(res => {
              if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, true))
              }
            }
        )
  }
}
