import {createStore, combineReducers} from 'redux'
import {dialogsReducer} from "./reducers/dialogs-reducers";
import {profileReducer} from "./reducers/profile-reducers";
import {sidebarReducer} from "./reducers/sidebar-reducers";

export const reducer = combineReducers(
    {
        profilePage: profileReducer,
        messagePage: dialogsReducer,
        sidebar: sidebarReducer,
    }
)

export const store = createStore(reducer)
