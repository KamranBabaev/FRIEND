import React from "react";
import style from './Profile.module.css'
import photo from './content.jpg'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}