import React from "react";
import style from './Profile.module.css'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {setUsersProfile} from "../../redux/reducers/profile-reducers";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {usersAPI} from "../../api/api";


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

type ProfileContainerPropsType = RouteComponentProps<{userId?: string}> & {
    setUsersProfile: (data: ProfileDataType) => void
    profile: ProfileDataType
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
            usersAPI.getUserByID(userId).then(data => {
                this.props.setUsersProfile(data)
            })
    }

    render() {
        return (
            <div className={style.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(withUrlDataContainerComponent)