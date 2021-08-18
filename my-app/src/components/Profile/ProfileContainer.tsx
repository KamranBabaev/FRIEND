import React, {ComponentType} from "react";
import style from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
  getUsersProfile,
  getUserStatus,
  userUpdateStatus
} from "../../redux/reducers/profile-reducers";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizedUserID
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUsersProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>,
                     prevState: Readonly<{}>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
        <div className={style.profile}>
          <Profile {...this.props}
                   profile={this.props.profile}
                   status={this.props.status}
                   userUpdateStatus={this.props.userUpdateStatus}
                   getUserStatus={this.props.getUserStatus}
          />
        </div>
    )
  }
}

let mapStateToProps = (state: any): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserID: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getUsersProfile, getUserStatus, userUpdateStatus}),
    withRouter, withAuthRedirect)(ProfileContainer)

// types
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
type MapStateToPropsType = {
  profile: ProfileDataType
  status: string
  autorizedUserID: string
  isAuth: boolean
}
type MapDispatchToPropsType = {
  getUsersProfile: (userId: string) => void
  getUserStatus: (userId: string) => void
  userUpdateStatus: (status: string) => void
}

type ProfileContainerPropsType = RouteComponentProps<{ userId?: string }>
    & MapStateToPropsType & MapDispatchToPropsType



