import React from "react";
import style from './Profile.module.css'
import photo from './content.jpg'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src={photo} alt=''/>
            </div>
            <MyPosts/>
        </div>
    )
}