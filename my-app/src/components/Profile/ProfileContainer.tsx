import React from "react";
import style from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/reducers/profile-reducers";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

type ProfileContainerPropsType = RouteComponentProps<{ userId?: string }> & {
    profile: ProfileDataType
    getUsersProfile: (userId: string) => void
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent)

