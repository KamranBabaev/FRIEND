import React from "react";
import style from './MyPosts.module.css'
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            <Post/>
        </div>
    )
}