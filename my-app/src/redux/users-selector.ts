import {RootReduxStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./reducers/users-reducers";

const getUsersSelector = (state: RootReduxStateType) => {
  return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,
    (users: Array<UserType>) => {
       return users.filter(u => u)
    })

export const getPageSize = (state: RootReduxStateType) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootReduxStateType) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootReduxStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: RootReduxStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootReduxStateType) => {
  return state.usersPage.followingInProgress
}
