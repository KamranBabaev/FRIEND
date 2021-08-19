import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../utils/types/types";

type ProfilePropsType = {
  profile: ProfileDataType
  status: string
  userUpdateStatus: (status: string) => void
  getUserStatus: (userId: string) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
      <div>
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