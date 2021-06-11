import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    addNewPostText: (newPostText: string) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     addNewPostText={props.addNewPostText}/>
        </div>
    )
}