import {createStore, combineReducers, applyMiddleware} from 'redux'
import {dialogsReducer} from "./reducers/dialogs-reducers";
import {profileReducer} from "./reducers/profile-reducers";
import {sidebarReducer} from "./reducers/sidebar-reducers";
import {usersReducer} from "./reducers/users-reducers";
import {authReducer} from "./reducers/auth-reducers";
import thunkMiddleware from 'redux-thunk'

export const reducer = combineReducers(
    {
        profilePage: profileReducer,
        messagePage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        authReducer: authReducer
    }
)

export type RootReduxStateType = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))
