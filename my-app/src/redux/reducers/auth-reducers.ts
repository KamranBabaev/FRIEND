import {authAPI, securityAPI} from "../../api/api";

type actionType = SetUserDataActionType | GetCaptchaActionType
export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>;
export type GetCaptchaActionType = ReturnType<typeof getCaptchaAC>;
type InitStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaURL: string | null
}

const initState: InitStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null
}

export const authReducer = (
    state: InitStateType = initState,
    action: actionType): InitStateType => {

  switch (action.type) {
    case 'AUTH/SET-USER-DATA':
      return {
        ...state,
        ...action.data
      }
    case 'AUTH/GET-CAPTCHA-SUCCESS':
      return {
        ...state,
        captchaURL: action.captchaURL
      }
    default:
      return state
  }
}

export const setAuthUserDataAC = (userId: number | null,
                                  email: string | null,
                                  login: string | null,
                                  isAuth: boolean) =>
    ({
      type: 'AUTH/SET-USER-DATA',
      data: {userId, email, login, isAuth}
    } as const);

export const getCaptchaAC = (captchaURL: string | null) => ({
  type: 'AUTH/GET-CAPTCHA-SUCCESS',
  captchaURL
} as const)


export const getAuthUserDataTC = () => async (dispatch: any) => {
  const promise = await authAPI.getMe()
  if (promise.data.resultCode === 0) {
    let {id, email, login} = promise.data.data
    dispatch(setAuthUserDataAC(id, email, login, true))
  }
}

export const loginTC = (email: string,
                        password: string,
                        rememberMe: boolean,
                        captcha: any) => async (dispatch: any) => {
  const promise = await authAPI.login(email, password, rememberMe, captcha)
  if (promise.data.resultCode === 0) {
    dispatch(getAuthUserDataTC())
  } else {
    if (promise.data.resultCode === 10) {
      dispatch(getCaptchaUrlTC())
    }
    let message = promise.data.messages.length > 0 ? promise.data.messages[0] : 'some error';
  }
}

export const logoutTC = () => async (dispatch: any) => {
  const promise = await authAPI.logout()
  if (promise.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false))
  }
}
export const getCaptchaUrlTC = () => async (dispatch: any) => {
  const promise = await securityAPI.getCaptcha()
  const captchaURL = promise.data.url
  dispatch(getCaptchaAC(captchaURL))
}
