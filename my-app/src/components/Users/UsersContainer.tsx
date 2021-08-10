import {connect} from "react-redux";
import {
  follow,
  followMode,
  getUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  unfollow,
  unfollowMode,
  UserType
} from "../../redux/reducers/users-reducers";
import {RootReduxStateType} from "../../redux/redux-store";
import React from "react";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preolader";
import {compose} from "redux";

type mapStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type UsersPropsType = {
  users: Array<UserType>
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
  isFetching: boolean
  followingInProgress: Array<number>
  getUsers: (currentPage: number, pageSize: number) => void
  followMode: (id: number) => void
  unfollowMode: (id: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
  }

  render() {
    return (
        <>
          {
            this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}
                         isFetching={this.props.isFetching}
                         followMode={this.props.followMode}
                         unfollowMode={this.props.unfollowMode}/>
          }
        </>
    )
  }
}

const mapStateToProps = (state: RootReduxStateType): mapStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
    connect(mapStateToProps, {
      follow, unfollow, setCurrentPage, toggleIsFollowingProgress,
      getUsers, followMode, unfollowMode
    }))(UsersContainer)
