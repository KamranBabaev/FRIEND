import {RouteComponentProps} from "react-router";
import {UserType} from "../../redux/reducers/users-reducers";

// types for App
export type MapDispatchToPropsTypeApp = {
  initializedAppTC: () => void
}
export type MapStateToPropsTypeApp = {
  initialized: boolean
}
export type AppPropsType = MapStateToPropsTypeApp & MapDispatchToPropsTypeApp

// types for HeaderContainer
export type MapStatePropsTypeHeaderContainer = {
  login: string | null
  isAuth: boolean
}
export type MapDispatchPropsTypeHeaderContainer = {
  logoutTC: () => void
}
export type HeaderContainerType =
    MapStatePropsTypeHeaderContainer
    & MapDispatchPropsTypeHeaderContainer

// types for Header
export type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logoutTC: () => void
}

// types for ProfileContainer
export type ProfileDataType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
  }
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: string
  photos: {
    small: string
    large: string
  }
}
export type MapStateToPropsTypeProfileContainer
    = {
  profile: ProfileDataType
  status: string
  autorizedUserID: string
  isAuth: boolean
}
export type MapDispatchToPropsTypeProfileContainer
    = {
  getUsersProfile: (userId: string) => void
  getUserStatus: (userId: string) => void
  userUpdateStatus: (status: string) => void
}

export type ProfileContainerPropsType = RouteComponentProps<{ userId?: string }>
    & MapStateToPropsTypeProfileContainer
    & MapDispatchToPropsTypeProfileContainer

// types for User
export type UsersPropsType = {
  users: Array<UserType>
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  followingInProgress: Array<number>
  isFetching: boolean
  followMode: (id: number) => void
  unfollowMode: (id: number) => void
}