import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "./ProfileContainer";

type ProfilePropsType = {
  profile: ProfileDataType
  status: string
  userUpdateStatus: (status: string) => void
  getUserStatus: (userId: string) => void
}


export const Profile = (props: ProfilePropsType) => {
  return (
      <div className={style.profile}>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            userUpdateStatus={props.userUpdateStatus}
            getUserStatus={props.getUserStatus}
        />
        <MyPostsContainer/>
      </div>
  )
}