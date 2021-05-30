import React from "react";
import style from './Profile.module.css'
import photo from './content.jpg'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

type ProfileType = {
    posts: Array<PostsType>
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}