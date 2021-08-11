import {RootReduxStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./reducers/users-reducers";

export const getUsers = (state: RootReduxStateType) => {
  return state.usersPage.users
}

export const getUsersSelector = ((state: RootReduxStateType) => {
  return getUsers(state).filter(u => true)
})

export const getUsersSuperSelector = createSelector(getUsers,
    (users: Array<UserType>) => {
      users.filter(u => true)
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
