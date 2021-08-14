import {getAuthUserDataTC} from "./auth-reducers";

type actionType = setInitializedAT
type InitStateType = {
  initialized: boolean
}
export type setInitializedAT = ReturnType<typeof setInitializedAC>

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

export const setInitializedAC = () => ({type: 'SET_INITIALIZED'} as const);

export const initializedAppTC = () => async (dispatch: any) => {
  let promise = dispatch(getAuthUserDataTC())
  await Promise.all([promise])
  dispatch(setInitializedAC())
}