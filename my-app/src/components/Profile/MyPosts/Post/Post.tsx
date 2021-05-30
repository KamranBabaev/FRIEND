import React from "react";
import style from './Post.module.css'
import avatar from './avatar.jpg'
import {PostsType} from "../../../../index";

type PostPropsType = {
    id: number
    title: string
    likeCounts: number
}
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