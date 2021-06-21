import {createStore, combineReducers} from 'redux'
import {dialogsReducer} from "./reducers/dialogs-reducers";
import {profileReducer} from "./reducers/profile-reducers";
import {sidebarReducer} from "./reducers/sidebar-reducers";
import {usersReducer} from "./reducers/users-reducers";

export const reducer = combineReducers(
    {
        profilePage: profileReducer,
        messagePage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer
    }
)

export type RootReduxStateType = ReturnType<typeof reducer>

export const store = createStore(reducer)
