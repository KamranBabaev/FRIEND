import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/helpers/object-helper";

type actionType =
    followType
    | unFollowType
    | setUsersType
    | currentPageType
    | setTotalUsersCountType
    | setIsFetchingType
    | setIsFollowingType

type followType = {
  type: 'FOLLOW'
  userID: number
}

type unFollowType = {
  type: 'UNFOLLOW'
  userID: number
}

type setUsersType = {
  type: 'SET-USERS'
  users: UserType[]
}

type currentPageType = {
  type: 'SET-CURRENT-PAGE'
  currentPage: number
}

type setTotalUsersCountType = {
  type: 'SET-TOTAL-USERS-COUNT'
  count: number
}

type setIsFetchingType = {
  type: 'TOGGLE-IS-FETCHING'
  isFetching: boolean
}

type setIsFollowingType = {
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
  isFetching: boolean
  userId: number
}

type UsersType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

export type UserType = {
  name: string
  id: number
  photos: {
    small: string | null
    large: string | null
  }
  status: string
  followed: boolean

}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state: UsersType = initialState, action: actionType): UsersType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      }

    case SETUSERS:
      return {...state, users: action.users}

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }
    }

    default:
      return state
  }
}


export const follow = (userID: number): followType => ({type: FOLLOW, userID})
export const unfollow = (userID: number): unFollowType => ({
  type: UNFOLLOW,
  userID
})
export const setUsers = (users: Array<UserType>): setUsersType => ({
  type: SETUSERS,
  users
})
export const setCurrentPage = (currentPage: number): currentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (count: number): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  count
})
export const toggleIsFetching = (isFetching: boolean): setIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export const toggleIsFollowingProgress = (isFetching: boolean,
                                          userId: number): setIsFollowingType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})


export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let promise = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(promise.data.items))
    dispatch(setTotalUsersCount(promise.data.totalCount))
  }
}

export const followMode = (id: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFollowingProgress(true, id))
    let promise = await usersAPI.isFollow(id)
    if (promise.data.resultCode === 0) {
      dispatch(follow(id))
    }
    dispatch(toggleIsFollowingProgress(false, id))
  }
}

export const unfollowMode = (id: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFollowingProgress(true, id))
    let promise = await usersAPI.isUnfollow(id)
    if (promise.data.resultCode === 0) {
      dispatch(unfollow(id))
    }
    dispatch(toggleIsFollowingProgress(false, id))
  }
}