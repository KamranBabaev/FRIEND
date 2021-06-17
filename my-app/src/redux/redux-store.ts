import {createStore, combineReducers} from 'redux'
import {dialogsReducer} from "./reducers/dialogs-reducers";
import {profileReducer} from "./reducers/profile-reducers";
import {sidebarReducer} from "./reducers/sidebar-reducers";

export let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagePage: dialogsReducer,
        sidebar: sidebarReducer,
    }
)

export let store = createStore(reducers)
