import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void

}
export const Profile = (props: ProfileType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}