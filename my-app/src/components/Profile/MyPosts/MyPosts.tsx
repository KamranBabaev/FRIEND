import React from "react";
import style from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsType) => {
    let postElements = props.posts
        .map(p => <Post id={p.id} title={p.title} likeCounts={p.likeCounts}/>)

    return (
        <div className={style.myPosts}>
            <div className={style.textForm}>
                <textarea/>
                <div className={style.buttons}>
                    <button >SEND</button>
                    <button>DELETE</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}