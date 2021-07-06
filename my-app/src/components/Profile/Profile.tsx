import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileDataType
}



export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}