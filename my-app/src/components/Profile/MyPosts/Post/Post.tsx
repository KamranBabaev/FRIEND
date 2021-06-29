import React from "react";
import style from './Post.module.css'
import avatar from './avatar.jpg'
import liked from './liked.svg'

type PostPropsType = {
    id: number
    title: string
    likeCounts: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={style.posts}>
            <img className={style.imgAvatar} alt='' src={avatar}/>
            <div className={style.title}>{props.title}</div>
            <div className={style.likesBlock}>
                <img className={style.liked} src={liked} alt=''/>
                {props.likeCounts}
            </div>
        </div>
    )
}