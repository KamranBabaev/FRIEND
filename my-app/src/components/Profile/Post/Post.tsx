import React from "react";
import style from './Post.module.css'
import avatar from './avatar.jpg'
import {PostDataType} from "../MyPosts/MyPosts";

type PostPropsType = PostDataType


export const Post = (props: PostPropsType) => {
    return (
        <div className={style.posts}>
            <img alt='' src={avatar}/>
            {props.title}<br/>
            <span>
                like {props.likeCounts}
            </span>
        </div>
    )
}