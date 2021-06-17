import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store: StoreType
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}