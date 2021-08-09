import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserDataTC} from "./auth-reducers";

type actionType = any
type InitStateType = {
  initialized: boolean
}

const initState: InitStateType = {
  initialized: false
}

export const appReducer = (state: InitStateType = initState,
                           action: actionType): InitStateType => {

  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const setInitializedAC = () => ({type: 'SET_INITIALIZED',});

export const initializedAppTC = () => {
  return (dispatch: any) => {
    dispatch(getAuthUserDataTC())
        .then(() => {
          dispatch(setInitializedAC())
        })
  }
}