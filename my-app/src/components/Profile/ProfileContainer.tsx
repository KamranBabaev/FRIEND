import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
  getUsersProfile,
  getUserStatus,
  userUpdateStatus
} from "../../redux/reducers/profile-reducers";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  MapStateToPropsTypeProfileContainer,
  ProfileContainerPropsType
} from "../../utils/types/types";

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
        <div>
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

let mapStateToProps = (state: any): MapStateToPropsTypeProfileContainer => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserID: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getUsersProfile, getUserStatus, userUpdateStatus}),
    withRouter, withAuthRedirect)(ProfileContainer)







