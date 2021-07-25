import React, {ComponentType} from "react";
import style from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/reducers/profile-reducers";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfilePageType} from "../../redux/store";


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
  profile: ProfilePageType
}

type MapDispatchToPropsType = {
  getUsersProfile: (userId: number) => void
}

type ProfileContainerPropsType = RouteComponentProps<{ userId?: string }>
    & {
  profile: ProfileDataType
  getUsersProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType
    & MapStateToPropsType
    & MapDispatchToPropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.getUsersProfile(userId)
  }

  render() {
    return (
        <div className={style.profile}>
          <Profile {...this.props} profile={this.props.profile}/>
        </div>
    )
  }
}

let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

